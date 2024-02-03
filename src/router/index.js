import { createRouter, createWebHistory } from 'vue-router'
import RegisterVue from '@/views/Register.vue'
import LoginVue from '@/views/Login.vue';
import Verification from '@/views/Verification.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginVue
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterVue
    },
    {
      path: '/verification',
      name: 'verification',
      component: Verification,
    },
  ]
})

export default router
