<template>
  <nav>
    <router-link :to="'/perso/'+idPerso+'/home'">home</router-link> |
    <router-link :to="'/perso/'+idPerso+'/caracteristique'">caracteristiques</router-link> |
    <router-link :to="'/perso/'+idPerso+'/competences'">competences</router-link> |
    <router-link :to="'/perso/'+idPerso+'/inventaire'">inventaire</router-link> |
    <router-link :to="'/perso/'+idPerso+'/equipement'">equipement</router-link> |
    <router-link :to="'/perso/'+idPerso+'/monaie'">monaie</router-link> |
    <router-link :to="'/perso/'+idPerso+'/modificateur'">modificateur</router-link> |
    <router-link :to="'/perso/'+idPerso+'/coup-speciaux'">coup speciaux</router-link> |
  </nav>
  <router-view/>
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