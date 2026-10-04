<template>
  <Aff :id-perso="idPerso"/>

  <h3>Inventaire</h3>
  <button v-on:click="handleAdd">+</button>
  <div>
    <ul v-for="obj in perso.inventaire">
      <li>{{obj.nom}} ({{obj.desc}})<button v-on:click="handleDelete(obj)">-</button></li>
    </ul>
  </div>
</template>

<script>
import Aff from "@/components/Aff.vue";

export default {
  name: "Inventaire",
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
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/inventaire/" + this.inventaire.indexOf(obj), requestOption)
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