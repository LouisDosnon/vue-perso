<template>
  <h3>Perso</h3>
  <p>nom: {{this.perso.nom}}<button v-on:click="handleModifNom">/</button></p>
  <p>classe: {{this.perso.classe}}<button v-on:click="handleModifClasse">/</button></p>
  <p>race: {{this.perso.race}}<button v-on:click="handleModifRace">/</button></p>
  <p>vie: {{this.perso.pv}}<button v-on:click="handleModifPv">/</button> / {{this.perso.pv_max}}<button v-on:click="handleModifPvMax">/</button></p>
  <p>niveau: {{this.perso.niveau}}<button v-on:click="handleModifLvl">/</button> ({{this.perso.xp}}<button v-on:click="handleModifXp">/</button>/{{this.perso.xp_max}})<button v-on:click="handleModifXpMax">/</button></p>
  <img :src="this.perso.image" alt="img"/>
</template>

<script>
import Aff from "@/components/Aff.vue";

export default {
  name: "Perso",
  props: ['idPerso'],
  components: {
    Aff,
  },
  data() {
    return {
      perso: [],
      id: null,
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
    handleModifNom(){
      let requestOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("nom:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/nom", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifClasse(){
      let requestOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("classe:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/classe", requestOption)
          .then((response) =>{
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifRace(){
      let requestOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("race:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/race", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifLvl(){
      let requestOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("lvl:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/lvl", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifPv(){
      let requestOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("pv:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/pv", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifPvMax(){
      let requestOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("pv max:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/pv_max", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifXp(){
      let requestOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("xp:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/xp", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifXpMax(){
      let requestOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("xp max:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/xp_max", requestOption)
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