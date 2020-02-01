<template>
  <div>
    <app-navbar />
    <router-view class="router"/>

  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";


export default {
  components: {
    appNavbar: Navbar,
  }
};
</script>

<style>
* {
  font-family: Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style scoped>
 .router{
    margin: 20px;
 }
</style>
