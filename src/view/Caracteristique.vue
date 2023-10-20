<template>
  <h3>Caratceristique</h3>
  <div>
    <p>charisme: {{caracteristique.charisme}}<button v-on:click="handleModifCha(obj)">/</button></p>
    <p>courage: {{caracteristique.courage}}<button v-on:click="handleModifCou(obj)">/</button></p>
    <p>adresse: {{caracteristique.adresse}}<button v-on:click="handleModifAdr(obj)">/</button></p>
    <p>force: {{caracteristique.force}}<button v-on:click="handleModifFo(obj)">/</button></p>
    <p>intelligence: {{caracteristique.intelligence}}<button v-on:click="handleModifInt(obj)">/</button></p>
    <p>attaque: {{caracteristique.attaque}}<button v-on:click="handleModifAtt(obj)">/</button></p>
    <p>parade: {{caracteristique.parade}}<button v-on:click="handleModifPrd(obj)">/</button></p>
    <p>destin: {{caracteristique.destin}}<button v-on:click="handleModifDes(obj)">/</button></p>
    <p>energie astrale: {{caracteristique.energie_astrale}}<button v-on:click="handleModifEa(obj)">/</button>/{{caracteristique.energie_astrale_max}}<button v-on:click="handleModifEaMax(obj)">/</button></p>
  </div>
</template>

<script>
export default {
  name: "Caracteristique",
  props: ['idPerso'],
  data() {
    return {
      caracteristique: {},
    }
  },
  methods: {
    handleModifCha() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("charisme:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/caracteristique/charisme", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getCaracteristique())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    handleModifCou() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("courage:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/caracteristique/courage", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getCaracteristique())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    handleModifAdr() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("adresse:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/caracteristique/adresse", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getCaracteristique())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    handleModifFo() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("force:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/caracteristique/force", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getCaracteristique())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    handleModifInt() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("intelligence:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/caracteristique/intelligence", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getCaracteristique())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    handleModifAtt() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("attaque:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/caracteristique/attaque", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getCaracteristique())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    handleModifPrd() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("parade:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/caracteristique/parade", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getCaracteristique())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    handleModifDes() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("destin:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/caracteristique/destin", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getCaracteristique())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    handleModifEa() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("energie astrale:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/caracteristique/energie_astrale", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getCaracteristique())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    handleModifEaMax() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: prompt("energie astrale max:")
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/caracteristique/energie_astrale_max", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getCaracteristique())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    getCaracteristique() {
      console.log("https://pers-api.onrender.com/persos/" + this.idPerso + "/caracteristique")
      fetch ("https://pers-api.onrender.com/persos/" + this.idPerso + "/caracteristique")
          .then((response) => response.json())
          .then((carac) => this.caracteristique = carac)
          .then(() => console.log("perso = " + JSON.stringify(this.caracteristique)))
    }
  },
  created() {
    this.getCaracteristique();
  }
}
</script>

<style scoped>

</style>