<template>
  <div id="message">
    <div id="innermessage">
      <h5>{{ message.senderId }}: <span>{{ message.timestamp }}</span></h5>
      <p>{{ message.content }}</p>
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