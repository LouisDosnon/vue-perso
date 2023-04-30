<template>
  <div id="nav">
    <router-link to="/perso/home">home</router-link>
    <router-link to="/perso/caracteristique">caracteristiques</router-link>
    <router-link to="/perso/competences">competences</router-link>
    <router-link to="/perso/invenaire">inventaire</router-link>
    <router-link to="/perso/equipement">equipement</router-link>
    <router-link to="/perso/monaie">monaie</router-link>
    <router-link to="/perso/modificateur">modificateur</router-link>
    <router-link to="/perso/coupSpeciaux">coup speciaux</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>

</style>