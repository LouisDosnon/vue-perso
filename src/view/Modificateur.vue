<template>
  <h3>Modificateur</h3>
  <div>
    <ul v-for="modif in modificateur">
      <li>{{modif.attribut}}: {{modif.difference}} ({{modif.desc}})</li>
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
    getCompetences() {
      console.log("http://localhost:8080/persos/" + this.idPerso + "/modificateur")
      fetch ("http://localhost:8080/persos/" + this.idPerso + "/modificateur")
          .then((response) => response.json())
          .then((modif) => this.modificateur = modif)
          .then(() => console.log("perso = " + JSON.stringify(this.modificateur)))
    }
  },
  created() {
    this.getCompetences();
  }
}
</script>

<style scoped>

</style>