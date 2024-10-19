<template>
  <div id="weatherCard">
    <h4>{{ weater.date }}</h4>
    <h5>{{ weater.condition }}</h5>
    <p><i class="bi bi-thermometer-half"></i>{{ weater.temperatureC }} </p>
  </div>
</template>
<script>
export default{
  props:['weater'],
  data(){
    return {

    }
  }, 
  methods:{

  },
  computed:{

  },
  mounted(){


  },
  components:{

  }
}
</script>