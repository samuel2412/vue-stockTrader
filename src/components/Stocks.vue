<template>
  <div>
    <div v-if="companies.length" class="row row-cols-1 row-cols-md-2">
      <div class="col mb-4" v-for="(company,index) in companies" :key="company.name">
        <app-card :company="company" :index="index"></app-card>
      </div>
    </div>
    <div v-else class="alert alert-warning" role="alert">You don't have stocks</div>
  </div>
</template>

<script>
import StockCard from "./StockCard.vue";

export default {
  data() {
    return {
      path: this.$router.currentRoute.path
    };
  },
  watch: {
    $route(to, from) {
      if (to.path != this.path) {
        this.path = to.path;
      }
    }
  },
  computed: {
    companies() {
      if (this.path === "/stocks") {
        return this.$store.getters.companies;
      } else if (this.path === "/portfolio") {
        return this.$store.getters.userStocks;
      }
    }
  },
  components: {
    appCard: StockCard
  },
};
</script>