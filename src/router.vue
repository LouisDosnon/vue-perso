<script>
  import {createRouter, createWebHistory} from 'vue-router';
  import Perso from "@/components/Perso.vue";
  import Caracteristique from "@/view/Caracteristique.vue";
  import Equipement from "@/view/Equipement.vue";
  import Competences from "@/view/Competences.vue";
  import Inventaire from "@/view/Inventaire.vue";
  import Monaie from "@/view/Monaie.vue";
  import Modificateur from "@/view/Modificateur.vue";
  import CoupSpeciaux from "@/view/CoupSpeciaux.vue";


  const routes = [
      {
        path: '/perso/home/:idPerso',
        name: 'home',
        component: Perso,
        props: true,
      },
      {
        path: '/perso/caracteristique/:idPerso',
        name: 'caracteristique',
        component: Caracteristique,
        props: true,
      },
      {
        path: '/perso/equipement/:idPerso',
        name: 'equipement',
        component: Equipement,
        props: true,
      },
      {
        path: '/perso/competences/:idPerso',
        name: 'competences',
        component: Competences,
        props: true,
      },
      {
        path: '/perso/inventaire/:idPerso',
        name: 'inventaire',
        component: Inventaire,
        props: true,
      },
      {
        path: '/perso/monaie/:idPerso',
        name: 'monaie',
        component: Monaie,
        props: true,
      },
      {
        path: '/perso/modificateur/:idPerso',
        name: 'modificateur',
        component: Modificateur,
        props: true,
      },

    {
      path: '/perso/coup-speciaux/:idPerso',
      name: 'coupSpeciaux',
      component: CoupSpeciaux,
      props: true,
    },
    ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router
</script>