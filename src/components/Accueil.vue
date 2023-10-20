<template>
  <h2>Persos</h2>

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
      id: ""
    }
  },
  methods: {
    handleChange() {
      this.id = document.getElementById("selectPerso").value;
    },
    getPersoList() {
      fetch ("https://pers-api.onrender.com/persos")
          .then((response) => response.json())
          .then((persos) => this.persoList = persos)
          .then(() => console.log("persoList = " + this.persoList))
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
      fetch ("https://pers-api.onrender.com/jwtGenerator/louis3022&29d55de952ef175aca7752b2e610a58b")
          .then((response) => response.text())
          .then((token) => localStorage.setItem("token", token))
          .then(() => console.log("token = " + localStorage.getItem("token")))
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