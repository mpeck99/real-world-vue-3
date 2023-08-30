<template>
  <p>Register for the event here!</p>
  <button @click="register">Register now</button>
</template>

<script>
export default {
  props: ['event'],
  methods: {
    register() {
      //Call to API
      //If registered then redirect to event details

      //Navigates user to this location
      this.$router.push({
        name: 'Details',
      })
    },
  },
}
</script>

<!-- When you call <router-link> it is calling this.$router.push from inside the router-link definition -->

<!-- Replace instead of push to navigate - navigates the user without pushing a history even to the browser: 
      - effectively disabling back button
    this.$router.replace({name: 'Details', params:  {id: 3}})
      - Replaces current page with the details page 
      - Can be useful if you have a complex form and you dont want to allow your users to navigate back to
   
   this.$router.go(1) - navigates forward like the browsers forward button
   this.$router.go(-1) - navigates backward like the browsers back button 
    - Can be useful if your building a native app where you have custom back/forward buttons

-->