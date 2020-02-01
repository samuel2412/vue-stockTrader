<template>
  <div class="jumbotron">
    <h1 class="display-4">Trade or View your Portfolio</h1>
    <p>You may Save & Load your Data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <hr class="my-4" />
    <h5>
      <strong>Your Funds: $ {{funds}}</strong>
    </h5>
  </div>
</template>

<script>
export default {
  computed:{
    funds(){
       return this.$store.getters.userFunds;
    }
  }
};
</script>

<style scoped>
div {
  background-color: #fcfcfc;
  box-shadow: 2px 2px 10px gray;
}
</style>