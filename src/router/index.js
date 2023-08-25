import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import Layout from '../views/event/Layout.vue'
import Details from '../views/event/Details.vue'
import AboutView from '../views/AboutView.vue'
import Register from '@/views/event/Register.vue'
import Edit from '@/views/event/Edit.vue'

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
      path: '/about',
      name: 'about',

      component: AboutView,
    },
    {
      path: '/event/:id',
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
  ]
})

export default router
