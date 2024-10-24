import { defineStore } from 'pinia';
import signalRConfigsWeather from '@/signalRConfigsWeather';

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weathers:[],  
  }),
  actions:{
    async getAllWeathers(weathers){
      this.weathers = weathers

    },
    async reciveWeatha() {
    await signalRConfigsWeather.startConnection((weatha) => {
      this.weathers = [];
      this.weathers = weatha;  
    });
  },
  
  },

});