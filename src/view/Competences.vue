<template>
  <h3>Competences</h3>
  <button v-on:click="handleAdd">+</button>
  <div>
    <ul v-for="comp in competences">
      <li>{{comp.nom}} ({{comp.desc}})<button v-on:click="handleDelete(comp)">-</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Competences",
  props: ['idPerso'],
  data() {
    return {
      competences: {},
    }
  },
  methods: {
    getCompetences() {
      console.log("https://pers-api.onrender.com/persos/" + this.idPerso + "/competences")
      fetch ("https://pers-api.onrender.com/persos/" + this.idPerso + "/competences")
          .then((response) => response.json())
          .then((comp) => this.competences = comp)
          .then(() => console.log("perso = " + JSON.stringify(this.competences)))
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
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/competences", requestOption)
          .then((response) => response.json())
          .then(() => this.getCompetences())
    },
    handleDelete: function(obj) {
      let requestOption = {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }
      console.log(obj)
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/competences/" + this.competences.indexOf(obj), requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getCompetences())
    }
  },
  created() {
    this.getCompetences();
  }
}
</script>

<style scoped>

</style>