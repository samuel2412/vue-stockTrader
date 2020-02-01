<template>
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col mb-4" v-for="company in companies" :key="company.name">
          <app-card :company="company"> </app-card>
      </div>
    </div>
</template>

<script>
import StockCard from './StockCard.vue';

export default {
   computed:{
       companies(){
           return this.$store.state.companies;
       }
   },
    components:{
        appCard: StockCard,
    }
};
</script>