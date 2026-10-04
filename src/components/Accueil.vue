<template>
  <h2>Persos</h2>
  <p>actual token generation date: {{ this.tokenDate }}
    <button v-on:click="getToken">reload token</button>
    {{}}
  </p>
  <p>token validity: 1 heure</p>
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
      tokenDate: "",
    }
  },
  methods: {
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
      var user = "louis3022"
      var mdp = "29d55de952ef175aca7752b2e610a58b"
      fetch("https://pers-api.onrender.com/jwtGenerator/" + user + "&" + mdp)
          .then((response) => response.text())
          .then((token) => {
            localStorage.setItem("token", token);
            var currentDate = new Date();
            this.tokenDate = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear()
                + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + "." + currentDate.getMilliseconds();
          })
          .catch((error) => alert("error: " + error))
    }
  },
  created() {
    this.getToken();
  }
}
</script>

<style scoped>

</style>