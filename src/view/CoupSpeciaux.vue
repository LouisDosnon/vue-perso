<template>
  <h3>Coup Spéciaux</h3>
  <button v-on:click="handleAdd">+</button>
  <div>
    <ul v-for="coupS in coupSpeciaux">
      <li>{{coupS.nom}} ({{coupS.desc}})<button v-on:click="handleDelete(coupS)">-</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CoupSpeciaux",
  props: ['idPerso'],
  data() {
    return {
      coupSpeciaux: {},
    }
  },
  methods: {
    getCoupSpeciaux() {
      console.log("https://pers-api.onrender.com/persos/" + this.idPerso + "/coup-speciaux")
      fetch ("https://pers-api.onrender.com/persos/" + this.idPerso + "/coup-speciaux")
          .then((response) => response.json())
          .then((coupS) => this.coupSpeciaux = coupS)
          .then(() => console.log("perso = " + JSON.stringify(this.coupSpeciaux)))
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
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/coup-speciaux", requestOption)
          .then((response) => response.json())
          .then(() => this.getCoupSpeciaux())
    },
    handleDelete: function(obj) {
      let requestOption = {
        method: "DELETE",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }
      console.log(obj)
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/coup-speciaux/" + this.coupSpeciaux.indexOf(obj), requestOption)
          .then((response) => response.json())
          .then((data) => alert(data))
          .then(() => this.getCoupSpeciaux())
    }
  },
  created() {
    this.getCoupSpeciaux();
  }
}
</script>

<style scoped>

</style>