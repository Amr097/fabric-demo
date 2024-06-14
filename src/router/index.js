import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: () => import('../layouts/AppLayout.vue'),
      children: [{ path: '/', name: 'index', component: () => import('../views/HomeView.vue') }]
    }
  ]
})

export default router
