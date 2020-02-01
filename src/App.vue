<template>
  <div>
    <app-navbar>
      <component :is="component"></component>
     <!--  <app-home></app-home>
      <app-stocks></app-stocks> -->
    </app-navbar>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Stocks from "./components/Stocks.vue";

export default {
  data(){return{
    component: 'app-home',
  }},
  components: {
    appNavbar: Navbar,
    appHome: Home,
    appStocks: Stocks
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

