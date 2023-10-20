<template>
  <h3>Inventaire</h3>
  <button v-on:click="handleAdd">+</button>
  <div>
    <ul v-for="obj in inventaire">
      <li>{{obj.nom}} ({{obj.desc}})<button v-on:click="handleDelete(obj)">-</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Inventaire",
  props: ['idPerso'],
  data() {
    return {
      inventaire: {},
    }
  },
  methods: {
    getInventaire() {
      console.log("https://pers-api.onrender.com/persos/" + this.idPerso + "/inventaire")
      fetch ("https://pers-api.onrender.com/persos/" + this.idPerso + "/inventaire")
          .then((response) => response.json())
          .then((inv) => this.inventaire = inv)
          .then(() => console.log("perso = " + JSON.stringify(this.inventaire)))
    },
    handleAdd() {
      console.log("Bearer " + localStorage.getItem("token"));

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
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/inventaire", requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getInventaire())
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    },
    handleDelete: function(obj) {
      let requestOption = {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/inventaire/" + this.inventaire.indexOf(obj), requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getInventaire())
    }
  },
  created() {
    this.getInventaire();
  }
}
</script>

<style scoped>

</style>