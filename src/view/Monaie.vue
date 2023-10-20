<template>
  <h3>Monaie</h3>
  <div>
    <p>or: {{monaie.or}}<button v-on:click="handleModifOr">/</button></p>
    <p>argent: {{monaie.argent}}<button v-on:click="handleModifArgent">/</button></p>
    <p>bronze: {{monaie.bronze}}<button v-on:click="handleModifBronze">/</button></p>
  </div>
</template>

<script>
export default {
  name: "Monaie",
  props: ['idPerso'],
  data() {
    return {
      monaie: {},
    }
  },
  methods: {
    getMonaie() {
      console.log("https://pers-api.onrender.com/persos/" + this.idPerso + "/monaie")
      fetch ("https://pers-api.onrender.com/persos/" + this.idPerso + "/monaie")
          .then((response) => response.json())
          .then((monaie) => this.monaie = monaie)
          .then(() => console.log("perso = " + JSON.stringify(this.monaie)))
    },
    handleModifOr(){
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("or:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/monaie/or", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getMonaie())
    },
    handleModifArgent(){
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token") },
        body: prompt("argent:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/monaie/argent", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getMonaie())
    },
    handleModifBronze(){
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token") },
        body: prompt("bronze:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/monaie/bronze", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getMonaie())
    }
  },
  created() {
    this.getMonaie();
  }
}
</script>

<style scoped>

</style>