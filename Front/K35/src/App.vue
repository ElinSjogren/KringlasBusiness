<template>
  <div id="app">
    <header>
      <h1>Kringlas business</h1>
    </header>
    <h4>Vädret:</h4>
    <WeatherBox></WeatherBox>
    <h4>Chat: </h4>
    <Chatbox></Chatbox>
  </div>
</template>
<script>
import Chatbox from './components/chatbox.vue';
import WeatherBox from './components/WeatherBox.vue';
import { useWeatherStore } from './stores/useWatherStore';
export default{
  data(){
    return {
      weaters:[],
    }
  }, 
  methods:{

  },
  computed:{

  },  
  mounted(){
    const weatherStore = useWeatherStore();
    weatherStore.getAllWeathers(); 
  },
  components:{
    Chatbox,
    WeatherBox
  }
}
</script>