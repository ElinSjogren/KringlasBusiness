<template>
  <div id="chatBox">
    <div id="sendBox">
      <textarea id="messageText" v-model="text">
      </textarea>
      <span>{{ getDateToday }}</span>
      <button v-if="text" class="btn" @click="sendText">Skicka</button>
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
    }
  }, 
  computed:{
    getDateToday(){
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let date= new Date();
      return `${date.getFullYear()} - ${months[date.getMonth()]} - ${date.getDate()}`;
    }
  },
  methods:{
    sendText(){
      if(this.text){
        signalRConfigs.sendMessage("anonymous", this.text, this.getDateToday);
        this.text = "";
      }
    }
  },
  mounted(){
    const messageStore = useChatStore();
    this.messages = messageStore.messages;
  },
  components:{
    message
  }
}
</script>