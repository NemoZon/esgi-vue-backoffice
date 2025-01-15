import { createMemoryHistory, createRouter } from 'vue-router'
import LoginPage from '@/pages/LoginPage.vue'

const routes = [
  { path: '/', name: "Login", component: LoginPage },
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})