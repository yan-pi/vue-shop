import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Basket from '../views/ShoppingBasket.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
