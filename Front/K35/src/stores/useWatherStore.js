import { defineStore } from 'pinia';
const url = "https://localhost:7053/api/Weather";

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weathers:[],  
  }),
  actions:{
    async getAllWeathers(){
      try{
        const response = await fetch(url);
        if(!response.ok){
          console.log(response.status)
        }
        const json = await response.json();
        this.weathers = json;
      }catch(error){
        console.log(error)
      }

    }
  
  },

});