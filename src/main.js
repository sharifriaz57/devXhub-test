import { createApp } from 'vue'
import App from '@/App'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import DashboardComponent from '@/components/Dashboard/DashboardComponent.vue'
import CashflowComponent from '@/components/Cashflow/CashflowComponent.vue'
import InvestmentComponent from '@/components/Investment/InvestmentComponent.vue'
import RealEstateComponent from '@/components/RealEstate/RealEstateComponent.vue'
import './index.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: DashboardComponent },
        { path: '/dashboard', component: DashboardComponent },
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


