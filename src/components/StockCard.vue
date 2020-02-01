<template>
    <div class="card">
      <div class="card-header">
        <span class="company-name">{{company.name}}</span>
        <span
          v-if="company.quantity"
          class="company-info"
        >(Price: {{company.price | priceFormat}} | Quantity: {{company.quantity}} )</span>
        <span v-else class="company-info">(Price: {{company.price | priceFormat}})</span>
      </div>

      <div class="card-body">
        <input v-model="quantity" class="form-control" type="number" placeholder="Quantity" min="1" />
        <button
          v-if="company.quantity"
          @click="sell({company,quantity})"
          class="btn btn-danger"
        >Sell</button>
        <button v-else @click="buy({company,quantity})" class="btn btn-primary">Buy</button>
      </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["company"],
  data() {
    return {
      quantity: ""
    };
  },
  methods: {
    ...mapActions(["buyStocks", "sellStocks"]),
    buy(payload) {
      this.buyStocks(payload);
      this.quantity = "";
    },
    sell(payload) {
      this.sellStocks(payload);
      this.quantity = "";
    }
  },
  filters: {
    priceFormat(value) {
      return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    }
  }
};
</script>

<style scoped>
.card {
  min-width: 250px;
  background-color: #fcfcfc;
  box-shadow: 2px 2px 10px gray;
}
.card-header {
  padding: 10px;
  background-color: #e3f2fd;
}
.card-body {
  display: flex;
  justify-content: space-between;
}
input {
  width: 40%;
  min-width: 100px;
}
.company-name {
  text-transform: capitalize;
  font-weight: bold;
}
.company-info {
  font-size: 12px;
}
</style>