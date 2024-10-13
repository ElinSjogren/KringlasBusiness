import { defineStore } from 'pinia';
import signalRConfigs from '../../signalRConfigs';

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [
      {message:"Leverandes sist var suverän", user: "Ladybug89", date: "2004-03"},
      {message:"Finns det refill på blomjorden", user: "Lena_N", date: "2007-09"},

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
          await SignalRService.startConnection((user, message) => {
            this.messages.push({ user, message });
          });
          this.isConnected = SignalRService.isConnected;
      },
  
  },

});