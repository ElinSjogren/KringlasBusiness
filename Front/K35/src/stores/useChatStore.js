import { defineStore } from 'pinia';
import signalRConfigs from '../../signalRConfigs';

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [
      {message:"Leveransen sist var suverän!", user: "Ladybug89", date: "2024 - Oktober - 11"}, 
      {message:"Finns det refill på blomjorden?", user: "Lena_N", date: "2024 - Oktober - 13"},

    ], 
    user: '',    
  }),
  actions:{
    setUser(name) {
      this.user = name;
    },
    addMessage(user, message, date){
      this.messages.push({user, message, date});
    },
      async reciveMessage() {
          await signalRConfigs.startConnection((user, message) => {
            this.messages.push({ user, message });
          });
          this.isConnected = SignalRService.isConnected;
      },
  
  },

});