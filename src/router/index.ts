import { createMemoryHistory, createRouter } from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'
import HomePage from '@/pages/HomePage.vue'
import LogoutPage from '@/pages/LogoutPage.vue'

const routes = [
  { path: '/login', name: "Login", component: LoginPage },
  { path: '/logout', name: "Logout", component: LogoutPage },
  { path: '/', name: "Home", component: HomePage },
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})