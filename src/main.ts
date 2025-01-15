import "./assets/index.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
import persistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(persistedState)
const app = createApp(App).use(pinia).use(router)

app.mount('#app')
