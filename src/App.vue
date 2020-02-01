<template>
  <div>
    <app-navbar></app-navbar>
    <app-home></app-home>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";

export default {
  components: {
    appNavbar: Navbar,
    appHome: Home,
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

