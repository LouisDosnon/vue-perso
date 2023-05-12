<template>
  <h3>Competences</h3>
  <div>
    <ul v-for="comp in competences">
      <li>{{comp.nom}} ({{comp.desc}})</li>
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
      console.log("http://localhost:8080/persos/" + this.idPerso + "/competences")
      fetch ("http://localhost:8080/persos/" + this.idPerso + "/competences")
          .then((response) => response.json())
          .then((comp) => this.competences = comp)
          .then(() => console.log("perso = " + JSON.stringify(this.competences)))
    }
  },
  created() {
    this.getCompetences();
  }
}
</script>

<style scoped>

</style>