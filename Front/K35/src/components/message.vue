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
#message{
  max-width: 60vw;
  background-color: rgb(255, 255, 193);
  color: black;
  margin: auto;
  border: solid rgb(185, 177, 58) 2px;
  border-radius: 5px;
  padding: 5px;
}

</style>