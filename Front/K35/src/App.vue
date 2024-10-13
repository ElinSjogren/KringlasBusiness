<template>
  <div id="app">
    <header>
      <h1>Kringlas business</h1>
    </header>
  <chatbox></chatbox>
  </div>
</template>
<script>
import chatbox from './components/chatbox.vue';
export default{
  data(){
    return {

    }
  }, 
  components:{
    chatbox
  }
}
</script>