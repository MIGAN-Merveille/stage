import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue' 
import AboutView from '../views/AboutView.vue'
import Inscription2View from '../views/Inscription2View.vue'
import Inscription3View from '../views/Inscription3View.vue'
import Modification2View from '../views/Modification2View.vue'

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
    path: '/inscription2',
    name: 'inscription2',
    component: Inscription2View
  },
  {
    path: '/inscription3',
    name : 'inscription3',
    component: Inscription3View
  },
  {
    path: '/modification2',
    name: 'modification2',
    component: Modification2View
  }  
]

const router = new VueRouter({
  routes
})

export default router
