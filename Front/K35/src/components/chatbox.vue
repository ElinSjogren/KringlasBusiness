<template>
  <div id="chatBox">
    <div id="sendBox">
      <label for="messageText">Text: </label>
      <textarea id="messageText" v-model="text" class="form-control">
      </textarea>
      <span>{{ getDateToday }}</span>
      <button v-if="text" class="btn sendbutton" @click="sendText">Skicka</button>
    </div>
    <div id="allMessages" v-for="m in filteredMessages">
      <message :message="m"></message>
    </div>
  </div>
</template>
<script>
import { useChatStore } from '@/stores/useChatStore';
import message from './message.vue';
import signalRConfigs from '../../signalRConfigs';
import { useCustomersStore } from '@/stores/useCustomerStore';
export default{
  data(){
    return {
      text:"",
      messages: [],
      senderId:"",
      reciverId:"",
    }
  }, 
  computed:{
    getDateToday(){
      const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
      let date= new Date();
      return `${date.getFullYear()} - ${months[date.getMonth()]} - ${date.getDate()}`;
    },
    filteredMessages(){
       return this.messages.filter((mess)=>{
        return mess.reciverId == this.senderId || mess.senderId == this.senderId
      })
    },
  },
  methods:{
    sendText(){
      if(this.text){
        // get Sender Id, the user right now
        const messageStore = useChatStore();
        this.senderId=messageStore.user;
        //get what customer to send too
        const customerStore= useCustomersStore();
        this.reciverId = customerStore.customer;
        if(this.reciverId==null){
          this.reciverId="admin";
        }
        console.log(this.reciverId, this.senderId, this.text, this.getDateToday);
        signalRConfigs.sendMessage(this.reciverId, this.senderId,  this.text, this.getDateToday);
        this.text = "";
      }
    }
  },
  mounted(){
    const messageStore = useChatStore();
    this.messages = messageStore.messages;
    this.senderId=messageStore.user;
  },
  components:{
    message,
  }
}
</script>