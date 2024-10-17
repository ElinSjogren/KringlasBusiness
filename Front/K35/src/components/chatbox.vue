<template>
  <div id="chatBox">
    <div id="sendBox">
      <label for="senderId">Användarnamn: </label>
      <input id="senderId" type="text" v-model="senderId" class="form-control">
      <label for="messageText">Text: </label>
      <textarea id="messageText" v-model="text" class="form-control">
      </textarea>
      <span>{{ getDateToday }}</span>
      <button v-if="text" class="btn sendbutton" @click="sendText">Skicka</button>
    </div>
    <div id="allMessages" v-for="m in messages">
      <message :message="m"></message>
    </div>
  </div>
</template>
<script>
import { useChatStore } from '@/stores/useChatStore';
import message from './message.vue';
import signalRConfigs from '../../signalRConfigs';
export default{
  data(){
    return {
      text:"",
      messages: [],
      senderId:"",
    }
  }, 
  computed:{
    getDateToday(){
      const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
      let date= new Date();
      return `${date.getFullYear()} - ${months[date.getMonth()]} - ${date.getDate()}`;
    },
    
  },
  methods:{
    sendText(){
      if(this.text){
        signalRConfigs.sendMessage(this.senderId, this.text, this.getDateToday);
        this.text = "";
      }
    }
  },
  mounted(){
    const messageStore = useChatStore();
    this.messages = messageStore.messages;
  },
  components:{
    message,
  }
}
</script>