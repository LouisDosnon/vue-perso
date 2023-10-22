<template>
  <h2>Persos</h2>
  <p>actual token generation date: {{this.tokenDate}} <button v-on:click="getToken">reload token</button> {{}}</p>
  <p>token validity: 1 heure</p>
  <nav id="selectPerso">

    <span v-for="perso in persoList">
      <router-link :to="'/perso/'+perso.id">{{perso.nom}}</router-link> |
    </span>
  </nav>
  <router-view/>
</template>

<script>



import Aff from "@/components/Aff.vue";

export default {
  name: "Acceuil",
  components: {
    Aff,
  },
  data() {
    return {
      persoList: [],
      persoSelected: {},
      id: "",
      tokenDate: "",

    }
  },
  methods: {
    handleChange() {
      this.id = document.getElementById("selectPerso").value;
    },
    getPersoList() {
      fetch ("https://pers-api.onrender.com/persos")
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then((persos) => this.persoList = persos)
          .catch((error) => alert("error: " + error))
    },
    addItem() {
      try {
        const response = fetch('/api/items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.newItem),
        });
        const newItem = response.json();
        this.items.push(newItem);
        this.newItem = {name: '', description: ''};
      } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'élément :', error);
      }
    },
    getToken() {
      var user = prompt("user:");
      var mdp = prompt("mdp:"); //29d55de952ef175aca7752b2e610a58b
      fetch ("https://pers-api.onrender.com/jwtGenerator/" + user + "&" + mdp)
          .then((response) => response.text())
          .then((token) => {
            localStorage.setItem("token", token);
            var currentDate = new Date();
            this.tokenDate = currentDate.getDate() + "/" + (currentDate.getMonth()+1) + "/" + currentDate.getFullYear()
                + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + "." + currentDate.getMilliseconds();
          })
          .catch((error) => alert("error: " + error))
    }
  },
  created() {
    this.getPersoList();
    this.getToken();
  }
}
</script>

<style scoped>

</style>