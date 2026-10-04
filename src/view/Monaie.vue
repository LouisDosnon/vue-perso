<template>
  <Aff :id-perso="idPerso"/>

  <h3>Monaie</h3>
  <div>
    <p>or: {{perso.monaie.or}}<button v-on:click="handleModifOr">/</button></p>
    <p>argent: {{perso.monaie.argent}}<button v-on:click="handleModifArgent">/</button></p>
    <p>bronze: {{perso.monaie.bronze}}<button v-on:click="handleModifBronze">/</button></p>
  </div>
</template>

<script>
import Aff from "@/components/Aff.vue";

export default {
  name: "Monaie",
  props: ['idPerso'],
  components: {
    Aff,
  },
  data() {
    return {
      perso: {},
    }
  },
  methods: {
    getPerso() {
      fetch ("https://pers-api.onrender.com/persos/" + this.idPerso)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then((perso) => {
            this.perso = perso
            this.id = this.$route.params.id
          })
          .catch(error => alert("error: " + error));
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
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
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
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
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
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    }
  },
  created() {
    this.getPerso();
  }
}
</script>

<style scoped>

</style>