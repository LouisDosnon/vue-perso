<template>
  <h3>Equipement</h3>
  <div>
    <p>tete: {{equipement.tete_int.nom}} ({{equipement.tete_int.desc}}) | {{equipement.tete_ext.nom}} ({{equipement.tete_ext.desc}})</p>
    <p>torse: {{equipement.torse_int.nom}} ({{equipement.torse_int.desc}}) | {{equipement.torse_ext.nom}} ({{equipement.torse_ext.desc}})</p>
    <p>jambe: {{equipement.jambe_int.nom}} ({{equipement.jambe_int.desc}})| {{equipement.jambe_ext.nom}} ({{equipement.jambe_ext.desc}})</p>
    <p>pied: {{equipement.pied_int.nom}} ({{equipement.pied_int.desc}})| {{equipement.pied_ext.nom}} ({{equipement.pied_ext.desc}})</p>
    <p>arme: {{equipement.arme.nom}} ({{equipement.arme.desc}})</p>
    <p>autre:</p>
    <ul v-for="autreEquip in equipement.autre">
      <li>{{autreEquip.nom}} ({{autreEquip.desc}})</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Equipement",
  props: ['idPerso'],
  data() {
    return {
      equipement: {},
    }
  },
  methods: {
    getEquipement() {
      console.log("http://localhost:8080/persos/" + this.idPerso + "/equipement")
      fetch ("http://localhost:8080/persos/" + this.idPerso + "/equipement")
          .then((response) => response.json())
          .then((equip) => this.equipement = equip)
          .then(() => console.log("perso = " + JSON.stringify(this.equipement)))
    }
  },
  created() {
    this.getEquipement();
  }
}
</script>

<style scoped>

</style>