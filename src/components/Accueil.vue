<template>
  <h2>Persos</h2>
  <select v-model="id" id="selectPerso" onchange="this.handleChange">
    <option :value="perso.id" v-for="perso in persoList">
      {{perso.nom}}
    </option>
  </select>
  <p>selected: {{id}}</p>
  <Aff :id-perso="id"/>
</template>

<script>



import Aff from "@/components/Aff.vue";

export default {
  name: "Acceuil",
  components: {
    Aff,
  },
  data() {
    return {
      persoList: [],
      persoSelected: {},
      id: ""
    }
  },
  methods: {
    handleChange() {
      this.id = document.getElementById("selectPerso").value;
    },
    getPersoList() {
      fetch ("http://localhost:8080/persos")
          .then((response) => response.json())
          .then((persos) => this.persoList = persos)
          .then(() => console.log("persoList = " + this.persoList))
    }
  },
  created() {
    this.getPersoList();
  }
}
</script>

<style scoped>

</style>