<template>
  <div>
    <p>charisme: {{caracteristique.charisme}}</p>
    <p>courage: {{caracteristique.courage}}</p>
    <p>adresse: {{caracteristique.adresse}}</p>
    <p>force: {{caracteristique.force}}</p>
    <p>intelligence: {{caracteristique.intelligence}}</p>
    <p>attaque: {{caracteristique.attaque}}</p>
    <p>parade: {{caracteristique.parade}}</p>
    <p>destin: {{caracteristique.destin}}</p>
    <p>energie astrale: {{caracteristique.energie_astrale}}/{{caracteristique.energie_astrale_max}}</p>
  </div>
</template>

<script>
export default {
  name: "Caracteristique",
  data() {
    return {
      caracteristique: {},
    }
  },
  methods: {
    getCaracteristique() {
      fetch ("http://localhost:8080/persos/" + this.$route.params.id+"/caracteristique")
          .then((response) => response.json())
          .then((carac) => this.caracteristique = carac)
          .then(() => console.log("perso = " + this.caracteristique))
    }
  },
  created() {
    this.getCaracteristique();
  }
}
</script>

<style scoped>

</style>