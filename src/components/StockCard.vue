<template>
  <div class="card">
    <h5 class="card-header">{{company}}</h5>
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
</style>