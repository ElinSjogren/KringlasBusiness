<template>
  <div id="message">
    <div id="innermessage">
      <h5>{{ from }}</h5>
      <p>{{ text }}</p>
      <span>{{ date }}</span>
    </div>
  </div>
</template>
<script>
import chatbox from './components/chatbox.vue';
export default{
  props:['text', 'from', 'date'],
  data(){
    return {

    }
  }, 
  components:{ }
}

</script>
<style scoped>
#message{
  max-width: 80vw;
  background-color: rgb(221, 221, 157);
  color: black;
}

</style>