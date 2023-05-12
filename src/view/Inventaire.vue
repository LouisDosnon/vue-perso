<template>
  <h3>Inventaire</h3>
  <div>
    <ul v-for="obj in inventaire">
      <li>{{obj.nom}} ({{obj.desc}})</li>
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
      console.log("http://localhost:8080/persos/" + this.idPerso + "/inventaire")
      fetch ("http://localhost:8080/persos/" + this.idPerso + "/inventaire")
          .then((response) => response.json())
          .then((inv) => this.inventaire = inv)
          .then(() => console.log("perso = " + JSON.stringify(this.inventaire)))
    }
  },
  created() {
    this.getInventaire();
  }
}
</script>

<style scoped>

</style>