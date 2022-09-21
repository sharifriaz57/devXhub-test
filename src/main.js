import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { useMainStore } from './store/store'
import './index.css'

const app = createApp(App)
const pinia = createPinia()
Vue.use(VueRouter)
app.use(pinia)
const store = useMainStore()


const routes = store.routes
const router = new VueRouter({
    routes
})

app.mount('#app')


