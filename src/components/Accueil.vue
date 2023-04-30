<template>
  <h2>Persos</h2>
  <select v-model="id" id="selectPerso" onchange="this.handleChange">
    <option :value="perso.id" v-for="perso in persoList">
      {{perso.nom}}
    </option>
  </select>
  <p>selected: {{id}}</p>
  <div id="nav">
    <router-link :to="{params: {id: this.id}, name: 'home'}">home</router-link>
    <router-link to="/caracteristique">caracteristiques</router-link>
    <router-link to="/competences">competences</router-link>
    <router-link to="/invenaire">inventaire</router-link>
    <router-link to="/equipement">equipement</router-link>
    <router-link to="/monaie">monaie</router-link>
    <router-link to="/modificateur">modificateur</router-link>
    <router-link to="/coupSpeciaux">coup speciaux</router-link>
  </div>
  <p>view</p>
  <router-view/>
</template>

<script>

import Perso from "@/components/Perso.vue";
import Caracteristique from "@/view/Caracteristique.vue";


export default {
  name: "Acceuil",
  components: {
    Perso,
    Caracteristique,
  },
  data() {
    return {
      persoList: [],
      id: null
    }
  },
  methods: {
    handleChange() {
      this.id = document.getElementById("selectPerso").value;
      console.log(document.getElementById("selectPerso"))
    },
    getPersoList() {
      fetch ("http://localhost:8080/persos")
          .then((response) => response.json())
          .then((persos) => this.persoList = persos)
          .then(() => console.log("persoList = " + this.persoList))
    },
  },
  created() {
    this.getPersoList();
  }
}
</script>

<style scoped>

</style>