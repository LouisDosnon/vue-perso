<template>
  <h3>Perso</h3>
  <p>{{idPerso}}</p>
  <p>id: {{this.id}}</p>
  <p>nom: {{this.perso.nom}}</p>
  <p>classe: {{this.perso.classe}}</p>
  <p>race: {{this.perso.race}}</p>
  <p>niveau: {{this.perso.niveau}} ({{this.perso.xp}}/{{this.perso.xp_max}})</p>
  <img :src="this.perso.image" alt="img"/>
</template>

<script>
export default {
  name: "Perso",
  props: ['idPerso'],
  data() {
    return {
      perso: [],
      id: null,
    }
  },
  methods: {
    getPerso() {
      fetch ("http://localhost:8080/persos/" + this.idPerso)
          .then((response) => response.json())
          .then((perso) => {
            this.perso = perso
            this.id = this.$route.params.id
          })
          .then(() => console.log("perso = " + this.perso))
    },
  },
  created() {
    this.getPerso();
  }
}
</script>

<style scoped>

</style>