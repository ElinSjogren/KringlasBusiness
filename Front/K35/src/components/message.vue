<template>
  <div id="message">
    <div id="innermessage">
      <h5>{{ message.user }}</h5>
      <p>{{ message.message }}</p>
      <span>{{ message.date }}</span>
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
#message{
  max-width: 80vw;
  background-color: rgb(221, 221, 157);
  color: black;
}

</style>