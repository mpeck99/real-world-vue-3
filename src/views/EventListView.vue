<template>
  <h1>Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <router-link
        v-for="currentpage in pages"
        :key="currentpage"
        :class="
          currentpage == page
            ? 'pagination-link pagination-link__active'
            : 'pagination-link'
        "
        :to="{ name: 'event-list', query: { page: currentpage } }"
        rel="currentPage"
        >{{ currentpage }}</router-link
      >
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventServices.js'
import { watchEffect } from 'vue'

export default {
  name: 'EventListView',
  props: ['page'],
  components: {
    EventCard,
  },

  data() {
    return {
      events: null,
      totalEvents: 0,
      pages: 0,
    }
  },

  created() {
    watchEffect(() => {
      this.events = null
      EventService.getEvents(2, this.page)
        .then((response) => {
          this.events = response.data
          this.totalEvents = response.headers['x-total-count']
          var totalPages = Math.ceil(this.totalEvents / 2)
          this.pages = totalPages
        })
        .catch((error) => {
          console.log(error)
        })
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

.pagination {
  display: flex;

  gap: 1rem;

  margin-top: 1rem;
}

.pagination-link {
  flex: 1;
  padding: 1rem;

  border-radius: 0.5rem;
  background: #c18bff;
  text-decoration: none;

  color: #333;

  font-weight: 700;
}

.pagination-link__active {
  color: #333;
  background: #fff;
}
</style>
