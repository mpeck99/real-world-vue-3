import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import Layout from '../views/event/Layout.vue'
const Details = () => import(/* webpackChunkName: "details" */  '../views/event/Details.vue')
const AboutView = () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
import Register from '@/views/event/Register.vue'
const Edit = () => import(/* webpackChunkName: "edit" */ '@/views/event/Edit.vue') 
import NotFound from '@/views/404.vue'
import NetworkError from '@/views/NetworkError.vue'
import Nprogress from 'nprogress'
import EventService from '@/services/EventServices.js'
import GStore from '@/store'

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
      beforeEnter: to => {
        return EventService.getEvent(to.params.id)
        .then((response) => {
          GStore.event = response.data
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return ({
              name: '404Resource',
              params: { resource: 'event' },
            })
          } else {
            return ({ name: 'NetworkError' })
          }
        })
      },
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
  ], 
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(()=>{
  Nprogress.start()
})

router.afterEach(()=>{
  Nprogress.done()
})

export default router
