<template>
  <h3>Monaie</h3>
  <div>
    <p>or: {{monaie.or}}</p>
    <p>argent: {{monaie.argent}}</p>
    <p>bronze: {{monaie.bronze}}</p>
  </div>
</template>

<script>
export default {
  name: "Monaie",
  props: ['idPerso'],
  data() {
    return {
      monaie: {},
    }
  },
  methods: {
    getMonaie() {
      console.log("http://localhost:8080/persos/" + this.idPerso + "/monaie")
      fetch ("http://localhost:8080/persos/" + this.idPerso + "/monaie")
          .then((response) => response.json())
          .then((monaie) => this.monaie = monaie)
          .then(() => console.log("perso = " + JSON.stringify(this.monaie)))
    }
  },
  created() {
    this.getMonaie();
  }
}
</script>

<style scoped>

</style>