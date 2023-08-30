<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style >
body,
html {
  height: 100%;

  display: flex;
  flex-direction: column;
}

main {
  flex: 1 0 100%;
}

#app,
#layout {
  height: 100%;
}

#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
nav {
  padding: 2rem;
}
nav a {
  font-weight: 700;
  color: #ffffff;
}

nav a:hover,
nav a:focus {
  color: #dcbdff;
}

nav a.router-link-exact-active {
  color: #c18bff;
}

body {
  background: #333;
}

h2 {
  font-size: 1.2rem;

  margin-top: 0;
}

button,
.btn {
  display: inline-block;
  padding: 1rem;
  margin-top: 1rem;

  border: none;
  background: #c18bff;
  border-radius: 0.5rem;

  font-weight: 700;
  font-size: 1rem;
  color: #333;
  text-decoration: none;
}

button:hover,
button:focus,
.btn:hover,
.btn:focus {
  background: #ffffff;
  cursor: pointer;
}
</style>
