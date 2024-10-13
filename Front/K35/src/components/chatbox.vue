<template>
  <div id="chatBox">
    <div id="sendBox">
      <textarea id="messageText" v-model="text">

      </textarea>
      <button v-if="text" class="btn" @click="sendText">Skicka</button>
    </div>
    <div id="allMessages">

    </div>
  </div>
</template>
<script>
import signalRConfigs from '../../signalRConfigs';
export default{
  data(){
    return {
      text:"",
      date: null
    }
  }, 
  methods:{
    sendText(){
      if(this.text){
        signalRConfigs.sendMessage("anonymous", this.text);
      }
    }
  },
  components:{
    
  }
}
</script>