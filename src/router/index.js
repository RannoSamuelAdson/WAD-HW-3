import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage'
import SignupPage from '@/views/SignupPage'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/signup',
      name: 'SignupPage',
      component: SignupPage
    }
    // ...other routes
  ]
})

export default router
