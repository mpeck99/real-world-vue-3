<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink
    class="event-link"
    :to="{ name: 'Details', params: { id: event.id } }"
  >
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 1.5rem;
  width: 15rem;
  cursor: pointer;
  border: 0.1rem solid #ffffff;
  margin-bottom: 1rem;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 0.2rem 0.6rem 0 rgba(0, 0, 0, 0.5);
}

.event-link {
  color: #ffffff;
  text-decoration: none;
}
</style>
