<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventServices.js'

export default {
  name: 'EventListView',
  props: ['page'],
  components: {
    EventCard,
  },

  data() {
    return {
      events: null,
    }
  },

  created() {
    EventService.getEvents(2, this.page)
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script> 

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
