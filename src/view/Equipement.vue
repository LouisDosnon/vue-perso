<template>
  <Aff :id-perso="idPerso"/>

  <h3>Equipement</h3>
  <div>
    <p>tete: {{perso.equipement.tete_int.nom}} ({{perso.equipement.tete_int.desc}})<button v-on:click="handleModifTeteInt()">/</button> | {{perso.equipement.tete_ext.nom}} ({{perso.equipement.tete_ext.desc}})<button v-on:click="handleModifTeteExt()">/</button></p>
    <p>torse: {{perso.equipement.torse_int.nom}} ({{perso.equipement.torse_int.desc}})<button v-on:click="handleModifTorInt()">/</button> | {{perso.equipement.torse_ext.nom}} ({{perso.equipement.torse_ext.desc}})<button v-on:click="handleModifTorExt()">/</button></p>
    <p>jambe: {{perso.equipement.jambe_int.nom}} ({{perso.equipement.jambe_int.desc}})<button v-on:click="handleModifJamInt()">/</button>| {{perso.equipement.jambe_ext.nom}} ({{perso.equipement.jambe_ext.desc}})<button v-on:click="handleModifJamExt()">/</button></p>
    <p>pied: {{perso.equipement.pied_int.nom}} ({{perso.equipement.pied_int.desc}})<button v-on:click="handleModifPiedInt()">/</button>| {{perso.equipement.pied_ext.nom}} ({{perso.equipement.pied_ext.desc}})<button v-on:click="handleModifPiedExt()">/</button></p>
    <p>arme: {{perso.equipement.arme.nom}} ({{perso.equipement.arme.desc}})<button v-on:click="handleModifArme()">/</button></p>
    <p>autre:</p>
    <button v-on:click="handleAdd">+</button>
    <ul v-for="autreEquip in perso.equipement.autre">
      <li>{{autreEquip.nom}} ({{autreEquip.desc}})<button v-on:click="handleDelete(autreEquip)">-</button></li>
    </ul>
  </div>
</template>

<script>
import Aff from "@/components/Aff.vue";

export default {
  name: "Equipement",
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
    handleModifTeteInt() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          nom: prompt("nom:"),
          desc: prompt("desc:")
        })
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/equipement/tete-int", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifTeteExt() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          nom: prompt("nom:"),
          desc: prompt("desc:")
        })
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/equipement/tete-ext", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifTorInt() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          nom: prompt("nom:"),
          desc: prompt("desc:")
        })
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/equipement/torse-int", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifTorExt() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          nom: prompt("nom:"),
          desc: prompt("desc:")
        })
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/equipement/torse-ext", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifJamInt() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          nom: prompt("nom:"),
          desc: prompt("desc:")
        })
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/equipement/jambe-int", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifJamExt() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          nom: prompt("nom:"),
          desc: prompt("desc:")
        })
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/equipement/jambe-ext", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifPiedInt() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          nom: prompt("nom:"),
          desc: prompt("desc:")
        })
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/equipement/pied-int", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifPiedExt() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          nom: prompt("nom:"),
          desc: prompt("desc:")
        })
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/equipement/pied-ext", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleModifArme() {
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          nom: prompt("nom:"),
          desc: prompt("desc:")
        })
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/equipement/arme", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleAdd() {
      console.log("add");
      let requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        body: JSON.stringify({
          nom: prompt("nom:"),
          desc: prompt("desc:")
        })
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/equipement/autre", requestOption)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then(() => this.getPerso())
          .catch(error => alert("error: " + error));
    },
    handleDelete: function(obj) {
      let requestOption = {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }
      console.log(this.equipement.autre.indexOf(obj))
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/equipement/autre/" + this.equipement.autre.indexOf(obj), requestOption)
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