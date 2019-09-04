import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Service from './views/Service.vue'
import Works from './views/Works.vue'
import Company from './views/Company.vue'
import Access from './views/Access.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/access',
      name: 'access',
      component: Access
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
