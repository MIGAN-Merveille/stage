import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue' 
import AboutView from '../views/AboutView.vue'
import Inscription2View from '../views/Inscription2View.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: Inscription2View
  }
]

const router = new VueRouter({
  routes
})

export default router
