<template>
  <p>Personnages:</p>
  <button v-on:click="getPersoList">reload token</button>
  <span v-for="perso in persoList">
    <b-card>
      <router-link :to="'/perso/'+perso.id">{{ perso.nom }}</router-link>
    </b-card>
  </span>
</template>

<script>
export default {
  name: "PersoList",
  props: [],
  data() {
    return {
      persoList: [],
    }
  },
  methods: {
    getPersoList() {
      fetch("https://pers-api.onrender.com/persos")
          .then((response) => {
            if (response.status === 403) {
              throw new Error("403 forbiden");
            }
            return response.json();
          })
          .then((persos) => this.persoList = persos)
          .catch((error) => alert("error: " + error))
    }
  },
  created() {
    this.getPersoList();
  }
}
</script>

<style scoped>

</style>