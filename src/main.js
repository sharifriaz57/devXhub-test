import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import AppComponent from './App.vue'
import CashflowComponent from './components/Cashflow/CashflowComponent.vue'
import InvestmentComponent from './components/Investment/InvestmentComponent.vue'
import RealEstateComponent from './components/RealEstate/RealEstateComponent.vue'
import './index.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/dashboard', component: AppComponent },
        { path: '/dashboard', component: AppComponent },
        { path: '/cash-flows', component: CashflowComponent },
        { path: '/investments', component: InvestmentComponent },
        { path: '/real-estates', component: RealEstateComponent },
    ]
})

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')


