<template>
  <Aff :id-perso="idPerso"/>
</template>

<script>
import Aff from "@/components/Aff.vue";

export default {
  name: "Perso",
  props: ['idPerso'],
  components: {
    Aff,
  },
  data() {
    return {
      perso: [],
      id: null,
    }
  },
  methods: {
    getPerso() {
      fetch ("https://pers-api.onrender.com/persos/" + this.idPerso)
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