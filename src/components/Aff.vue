<template>
  <ul>
    <router-link :to="'/perso/home/'+idPerso">home</router-link>
    <router-link :to="'/perso/caracteristique/'+idPerso">caracteristiques</router-link>
    <router-link :to="'/perso/competences/'+idPerso">competences</router-link>
    <router-link :to="'/perso/inventaire/'+idPerso">inventaire</router-link>
    <router-link :to="'/perso/equipement/'+idPerso">equipement</router-link>
    <router-link :to="'/perso/monaie/'+idPerso">monaie</router-link>
    <router-link :to="'/perso/modificateur/'+idPerso">modificateur</router-link>
    <router-link :to="'/perso/coup-speciaux/'+idPerso">coup speciaux</router-link>
  </ul>
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
      fetch("http://localhost:8080/persos/"+this.idPerso)
          .then((response) => response.json())
          .then((perso) => this.perso = perso)
          .then(() => console.log("personnage trouvé"))
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