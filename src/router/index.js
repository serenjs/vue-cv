import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/employment-history',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (EmployementHistory.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EmploymentHistory.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue')
    }
  ]
})

export default router