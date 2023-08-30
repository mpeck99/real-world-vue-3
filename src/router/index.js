import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import Layout from '../views/event/Layout.vue'
import Details from '../views/event/Details.vue'
import AboutView from '../views/AboutView.vue'
import Register from '@/views/event/Register.vue'
import Edit from '@/views/event/Edit.vue'
import NotFound from '@/views/404.vue'
import NetworkError from '@/views/NetworkError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: route => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/about-us',
      name: 'about',
      // alias: '/about', - FOR SEO reasons you might want to avoid alias to not have content in two places & google might penalize you
      component: AboutView,
    }
    ,    
    {
      // This is a redirect
      path: '/about',
      redirect: {name: 'about'},
    },
    {
      path: '/events/:id',
      name: 'Layout',
      props: true,
      component: Layout,
      children: [
        {
          path: '',
          name: 'Details',
          component: Details
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
        {
          path: 'edit',
          name: 'Edit',
          component: Edit
        }
      ]
    },
    {
      // Match on /event/ and capture everything else in afterEvent 
      // Using .* so that it will include / in the match (doesnt by default)
      path: '/event/:afterEvent(.*)',
      redirect: to =>{
        return { path: '/events/' + to.params.afterEvent}
      }
    },
    {
      path: '/:catchAl(.*)',
      name: '404',
      component: NotFound
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    },
    {
      path: '/network-error', 
      name: 'NetworkError',
      component: NetworkError
    }
  ]
})

export default router
