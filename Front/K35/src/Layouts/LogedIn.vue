<template>
  <div id="logedInComponent">
    <header>
      <h2>Skicka och ta emot meddelanden</h2>
      <p>Välj vilken kund - Se senaste beställningar och chatta direkt.</p>
    </header>
    <Searchbox></Searchbox>
    <chatbox></chatbox>
  </div>
</template>
<script>
import chatbox from '@/components/chatbox.vue';
import Searchbox from '@/components/Searchbox.vue';
export default{
  data(){
    return {

    }
  }, 
  components:{
    chatbox,
    Searchbox 
  }
}
</script>