<template>
  <h3>Equipement</h3>
  <div>
    <p>tete: {{equipement.tete_int.nom}} ({{equipement.tete_int.desc}})<button v-on:click="handleModifTeteInt()">/</button> | {{equipement.tete_ext.nom}} ({{equipement.tete_ext.desc}})<button v-on:click="handleModifTeteExt()">/</button></p>
    <p>torse: {{equipement.torse_int.nom}} ({{equipement.torse_int.desc}})<button v-on:click="handleModifTorInt()">/</button> | {{equipement.torse_ext.nom}} ({{equipement.torse_ext.desc}})<button v-on:click="handleModifTorExt()">/</button></p>
    <p>jambe: {{equipement.jambe_int.nom}} ({{equipement.jambe_int.desc}})<button v-on:click="handleModifJamInt()">/</button>| {{equipement.jambe_ext.nom}} ({{equipement.jambe_ext.desc}})<button v-on:click="handleModifJamExt()">/</button></p>
    <p>pied: {{equipement.pied_int.nom}} ({{equipement.pied_int.desc}})<button v-on:click="handleModifPiedInt()">/</button>| {{equipement.pied_ext.nom}} ({{equipement.pied_ext.desc}})<button v-on:click="handleModifPiedExt()">/</button></p>
    <p>arme: {{equipement.arme.nom}} ({{equipement.arme.desc}})<button v-on:click="handleModifArme()">/</button></p>
    <p>autre:</p>
    <button v-on:click="handleAdd">+</button>
    <ul v-for="autreEquip in equipement.autre">
      <li>{{autreEquip.nom}} ({{autreEquip.desc}})<button v-on:click="handleDelete(autreEquip)">-</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Equipement",
  props: ['idPerso'],
  data() {
    return {
      equipement: {},
    }
  },
  methods: {
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
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getEquipement())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
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
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getEquipement())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
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
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getEquipement())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
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
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getEquipement())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
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
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getEquipement())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
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
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getEquipement())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
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
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getEquipement())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
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
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getEquipement())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
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
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getEquipement())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    getEquipement() {
      console.log("https://pers-api.onrender.com/persos/" + this.idPerso + "/equipement")
      fetch ("https://pers-api.onrender.com/persos/" + this.idPerso + "/equipement")
          .then((response) => response.json())
          .then((equip) => this.equipement = equip)
          .then(() => console.log("perso = " + JSON.stringify(this.equipement)))
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
          .then((response) => response.json())
          .then(() => this.getEquipement())
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
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getEquipement())
    }
  },
  created() {
    this.getEquipement();
  }
}
</script>

<style scoped>

</style>