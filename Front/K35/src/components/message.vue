<template>
  <div id="message">
    <div id="innermessage">
      <h5>{{ message.user }}: <span>{{ message.date }}</span></h5>
      <p>{{ message.message }}</p>
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