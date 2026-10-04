<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand :to="'/perso/'+idPerso">{{this.perso.nom}}</b-navbar-brand>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="'/perso/'+idPerso+'/caracteristique'">caracteristiques</b-nav-item>
        <b-nav-item :to="'/perso/'+idPerso+'/competences'">competences</b-nav-item>
        <b-nav-item :to="'/perso/'+idPerso+'/inventaire'">inventaire</b-nav-item>
        <b-nav-item :to="'/perso/'+idPerso+'/equipement'">equipement</b-nav-item>
        <b-nav-item :to="'/perso/'+idPerso+'/monaie'">monaie</b-nav-item>
        <b-nav-item :to="'/perso/'+idPerso+'/coup-speciaux'">coup speciaux</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-nav-item right :to="'/'">return</b-nav-item>
  </b-navbar>
</template>

<script>
export default {
  name: "Aff",
  props: {
    idPerso: String,
  },
  data() {
    return {
      perso: {},
    }
  },
  methods: {
    getPerso() {
      fetch("https://pers-api.onrender.com/persos/"+this.idPerso)
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then((perso) => this.perso = perso)
          .catch((error) => alert("error: " + error))
      console.log(this.perso);
    },
  },
  created() {
    this.$watch(
        () => this.idPerso,
        () => {
          this.getPerso()
        },
        {immediate: true}
    )
  }
}
</script>

<style scoped>

</style>