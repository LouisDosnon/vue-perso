<template>
  <h3>Coup Spéciaux</h3>
  <div>
    <ul v-for="coupS in coupSpeciaux">
      <li>{{coupS.nom}} ({{coupS.desc}})</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CoupSpeciaux",
  props: ['idPerso'],
  data() {
    return {
      coupSpeciaux: {},
    }
  },
  methods: {
    getCoupSpeciaux() {
      console.log("http://localhost:8080/persos/" + this.idPerso + "/coup-speciaux")
      fetch ("http://localhost:8080/persos/" + this.idPerso + "/coup-speciaux")
          .then((response) => response.json())
          .then((coupS) => this.coupSpeciaux = coupS)
          .then(() => console.log("perso = " + JSON.stringify(this.coupSpeciaux)))
    }
  },
  created() {
    this.getCoupSpeciaux();
  }
}
</script>

<style scoped>

</style>