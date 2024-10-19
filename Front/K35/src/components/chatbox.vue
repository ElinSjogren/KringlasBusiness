<template>
  <div id="chatBox">
    <div id="sendBox">
      <label for="name">Namn:</label>
      <input id="name" v-model="user" class="form-control">
      <label for="messageContent">Text: </label>
      <textarea id="messageContent" v-model="messageContent" class="form-control">
      </textarea>
      <span>{{ getDateToday }}</span>
      <button v-if="messageContent" class="btn sendbutton" @click="sendText">Skicka</button>
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
      messageContent:"",
      messages: [],
      user:"",
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
      if(this.messageContent){
        console.log(this.user, this.messageContent, this.getDateToday);
        signalRConfigs.SendMessageToAll(this.user, this.messageContent, this.getDateToday);
        this.messageContent = "";
        this.user="";
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