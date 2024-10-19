import { defineStore } from 'pinia';
import signalRConfigs from '../../signalRConfigs';

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [
      {reciverId:"admin" ,senderId:"es87gotebarhhg", content: "Leveransen sist var suverän!", timestamp: "2024 - Oktober - 11"}, 
      {reciverId:"admin", senderId:"n74a", content: "Finns det refill på blomjorden?", timestamp: "2024 - Oktober - 13"},
      
    ], 
    user: null,    
  }),
  actions:{
    setUser(name) {
      localStorage.setItem("userName", name)
      this.user = name;
    },
    addMessage(reciverId, senderId, content, timestamp){
      this.messages.push({reciverId, senderId, content, timestamp});
    },
      async reciveMessage() {
          await signalRConfigs.startConnection((message) => {
            this.messages.push({ message });
          });
          this.isConnected = SignalRService.isConnected;
      },
  
  },

});