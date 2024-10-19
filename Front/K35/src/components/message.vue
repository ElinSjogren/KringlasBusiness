<template>
  <div id="message">
    <div id="innermessage">
      <h6>{{ message.user }}: </h6>
      <p>{{ message.messageContent }}<span>{{ message.date }}</span></p>
    </div>
  </div>
</template>
<script>
export default{
  props:['message'],
  data(){
    return {
      
    }
  }, 
  computed:{
    
  },
  components:{ }
}

</script>
<style scoped>


</style>