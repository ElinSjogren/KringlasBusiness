<template>
  <div id="app">
    <header>
      <h1>Kringlas business</h1>
    </header>
    <NotLogedIn v-if="!adminLogedIn"></NotLogedIn>
    <LogedIn v-if="adminLogedIn"></LogedIn>
  </div>
</template>
<script>
import LogedIn from './Layouts/LogedIn.vue';
import NotLogedIn from './Layouts/NotLogedIn.vue';
export default{
  data(){
    return {
      adminLogedIn:false,
    }
  }, 
  components:{
    NotLogedIn, 
    LogedIn
  }
}
</script>