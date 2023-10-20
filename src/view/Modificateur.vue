<template>
  <h3>Modificateur</h3>
  <button v-on:click="handleAdd">+</button>
  <div>
    <ul v-for="modif in modificateur">
      <li>{{modif.attribut}}: {{modif.difference}} ({{modif.desc}})<button v-on:click="handleDelete(modif)">-</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Modificateur",
  props: ['idPerso'],
  data() {
    return {
      modificateur: {},
    }
  },
  methods: {
    getModificateurs() {
      console.log("https://pers-api.onrender.com/persos/" + this.idPerso + "/modificateur")
      fetch ("https://pers-api.onrender.com/persos/" + this.idPerso + "/modificateur")
          .then((response) => response.json())
          .then((modif) => this.modificateur = modif)
          .then(() => console.log("perso = " + JSON.stringify(this.modificateur)))
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
          attribut: prompt("attribut:"),
          desc: prompt("desc:"),
          difference: prompt("difference:")
        })
      }
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/modificateur", requestOption)
          .then((response) => response.json())
          .then(() => this.getModificateurs())
    },
    handleDelete: function(obj) {
      let requestOption = {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }
      console.log(obj)
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/modificateur/" + this.modificateur.indexOf(obj), requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getModificateurs())
    }
  },
  created() {
    this.getModificateurs();
  }
}
</script>

<style scoped>

</style>