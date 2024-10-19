import { defineStore } from 'pinia';
import signalRConfigs from '../../signalRConfigs';

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [], 
    user: null,    
  }),
  actions:{
    setUser(name) {
      this.user = name;
    },
    addMessage(user, messageContent, date){
      this.messages.push({user, messageContent, date});
    },
      async reciveMessage() {
          await signalRConfigs.startConnection((user, messageContent, date) => {
            this.addMessage( user, messageContent, date );
          });
          this.isConnected = SignalRService.isConnected;
      },
  
  },

});