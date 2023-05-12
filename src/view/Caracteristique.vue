<template>
  <h3>Caratceristique</h3>
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
  props: ['idPerso'],
  data() {
    return {
      caracteristique: {},
    }
  },
  methods: {
    getCaracteristique() {
      console.log("http://localhost:8080/persos/" + this.idPerso + "/caracteristique")
      fetch ("http://localhost:8080/persos/" + this.idPerso + "/caracteristique")
          .then((response) => response.json())
          .then((carac) => this.caracteristique = carac)
          .then(() => console.log("perso = " + JSON.stringify(this.caracteristique)))
    }
  },
  created() {
    this.getCaracteristique();
  }
}
</script>

<style scoped>

</style>