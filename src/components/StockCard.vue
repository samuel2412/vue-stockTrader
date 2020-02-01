<template>
  <div class="card">
    <div class="card-header">
      <span class="company-name">{{company.name}}</span>
      <span v-if="company.quantity" class="company-info">(Price: {{company.price}} | Quantity: {{company.quantity}} )</span>
      <span v-else class="company-info">(Price: {{company.price}})</span>
    </div>

    <div class="card-body">
      <input class="form-control" type="number" placeholder="Quantity" />
      <button class="btn btn-primary">Buy</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["company"]
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
.company-name{
 text-transform: capitalize;
 font-weight: bold;
}
.company-info{
  font-size: 12px;
}
</style>