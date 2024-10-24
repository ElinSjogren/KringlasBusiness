<template>
  <div id="weaterBox">
      <WeaterCard v-for="w in weathers" :weater="w"></WeaterCard>
  </div>
</template>
<script>
import WeaterCard from './WeaterCard.vue';
import { useWeatherStore } from '@/stores/useWeatherStore';
import { mapState } from 'pinia';
export default{
  data(){
    return {

    }
  }, 
  methods:{

  },
  computed:{
    ...mapState(useWeatherStore,['weathers'])

  },
  mounted(){


  },
  components:{
    WeaterCard
  }
}
</script>