<script>
  import {createRouter, createWebHistory} from 'vue-router';
  import Perso from "@/components/Perso.vue";
  import Home from "@/view/Home.vue";
  import Caracteristique from "@/view/Caracteristique.vue";
  import Equipement from "@/view/Equipement.vue";
  import Competences from "@/view/Competences.vue";
  import Inventaire from "@/view/Inventaire.vue";
  import Monaie from "@/view/Monaie.vue";
  import Modificateur from "@/view/Modificateur.vue";
  import CoupSpeciaux from "@/view/CoupSpeciaux.vue";


  const routes = [
      {
        path: '/perso/:idPerso',
        name: 'perso',
        component: Perso,
        props: true,
        children: [
          {
            path: 'home',
            name: 'home',
            component: Home,
            props: true,
          },
          {
            path: 'caracteristique',
            name: 'caracteristique',
            component: Caracteristique,
            props: true,
          },
          {
            path: 'equipement',
            name: 'equipement',
            component: Equipement,
            props: true,
          },
          {
            path: 'competences',
            name: 'competences',
            component: Competences,
            props: true,
          },
          {
            path: 'inventaire',
            name: 'inventaire',
            component: Inventaire,
            props: true,
          },
          {
            path: 'monaie',
            name: 'monaie',
            component: Monaie,
            props: true,
          },
          {
            path: 'modificateur',
            name: 'modificateur',
            component: Modificateur,
            props: true,
          },

          {
            path: 'coup-speciaux',
            name: 'coupSpeciaux',
            component: CoupSpeciaux,
            props: true,
          },
        ]
      },
    ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router
</script>