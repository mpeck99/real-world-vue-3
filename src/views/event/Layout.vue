<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav id="nav">
      <router-link :to="{ name: 'Details' }">Details</router-link>
      |
      <router-link :to="{ name: 'Register' }">Register</router-link>
      |
      <router-link :to="{ name: 'Edit' }">Edit</router-link>
    </nav>
    <router-view :event="event" />
  </div>
</template>
<script>
import EventService from '@/services/EventServices.js'
export default {
  props: ['id'],
  data() {
    return {
      event: null,
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>