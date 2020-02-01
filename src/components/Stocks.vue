<template>
  <div class="my-div">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-4" v-for="company in companys" :key="company">
          <app-card :company="company"> </app-card>
      </div>
    </div>
  </div>
</template>

<script>
import StockCard from './StockCard.vue';

export default {
    data(){
        return{
            companys: ['BMW','Google','Apple','Twitter']
        }
    },
    components:{
        appCard: StockCard,
    }
};
</script>

<style scoped>
 .my-div{
  margin: 20px 20px;
}
</style>