<template>
  <div id="notLogedIn">
    <header>
      <h2>Skicka meddelande till Kringla</h2>
    </header>
    <chatbox></chatbox>
  </div>
</template>
<script>
import chatbox from '@/components/chatbox.vue';
export default{
  data(){
    return {

    }
  }, 
  components:{
    chatbox, 
  }
}
</script>