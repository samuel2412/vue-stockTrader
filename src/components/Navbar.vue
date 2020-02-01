<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light">
      <router-link to="/" tag="a" class="navbar-brand">Stock Trader</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <router-link to="/portfolio" tag="li" active-class="active">
            <a class="nav-link">Portfolio</a>
          </router-link>
          <router-link to="/stocks" tag="li" active-class="active">
            <a class="nav-link">Stocks</a>
          </router-link>
        </ul>
        <ul class="navbar-nav my-2 my-lg-0">
          <li class="nav-item">
            <span class="nav-link pointer" @click="endDay">End Day</span>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Save & Load</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <span class="dropdown-item pointer" @click="save">Save</span>
              <span class="dropdown-item pointer" @click="load">Load</span>
            </div>
          </li>
        </ul>
        <span class="navbar-text">Funds: $ {{funds}}</span>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.userFunds;
    }
  },
  methods: {
    ...mapActions(["fetchData","randomize"]),
    endDay() {
      this.randomize();
    },
    save() {
      const data = {
        funds: this.$store.state.userData.funds,
        userStocks: this.$store.getters.userStocks
      };
      this.$http
        .put("data.json", data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    load() {
      this.$http
        .get("data.json")
        .then(response => {
          const { funds, userStocks } = response.data;
          this.fetchData({ funds, userStocks });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
nav {
  background-color: #e3f2fd;
  padding: 5px 20px;
}
.pointer {
  cursor: pointer;
}
</style>