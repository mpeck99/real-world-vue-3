<template>
  <div class="network-error">
    <h1>Uh-oh!</h1>
    <h3>
      It looks like we are experiencing some network issues, please take a
      breath and <a href="#0" @click="$router.go(-1)">back</a> and try again.
    </h3>
  </div>
</template>