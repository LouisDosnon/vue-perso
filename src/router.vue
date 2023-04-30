<script>
  import {createRouter, createWebHistory} from 'vue-router';
  import Accueil from "@/components/Accueil.vue";
  import Perso from "@/components/Perso.vue";
  import Caracteristique from "@/view/Caracteristique.vue";


  const routes = [
      {
        path: '/',
        name: 'perso',
        component: Perso
      },
      {
        path: '/caracteristique',
        name: 'caracteristique',
        component: () => import('../src/view/Caracteristique.vue')
      }
    ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router
</script>