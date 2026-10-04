<template>
  <Aff :id-perso="idPerso"/>

  <h3>Modificateur</h3>
  <button v-on:click="handleAdd">+</button>
  <div>
    <ul v-for="modif in perso.modificateur">
      <li>{{modif.attribut}}: {{modif.difference}} ({{modif.desc}})<button v-on:click="handleDelete(modif)">-</button></li>
    </ul>
  </div>
</template>

<script>
import Aff from "@/components/Aff.vue";

export default {
  name: "Modificateur",
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
      console.log(obj)
      fetch("https://pers-api.onrender.com/persos/" + this.idPerso + "/modificateur/" + this.modificateur.indexOf(obj), requestOption)
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