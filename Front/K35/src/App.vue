<template>
  <div id="app">
    <header>
      <h1>Kringlas business</h1>
    </header>
    <div id="miniLogInBox" v-if="!isLogedIn">
      <input v-model="logedInAs" class="form-control">
      <button v-if="logedInAs" class="btn generallbtn" @click="setUser">Välj användare</button>
    </div>
    <div id="logedInAsBox" v-if="isLogedIn">
      <p>Inloggad som: {{this.user}}</p>
      <button class="btn generallbtn" @click="logOut">Logga ut</button>
    </div>
    <NotLogedIn v-if="!adminLogedIn"></NotLogedIn>
    <LogedIn v-if="adminLogedIn"></LogedIn>
  </div>
</template>
<script>
import { mapState } from 'pinia';
import LogedIn from './Layouts/LogedIn.vue';
import NotLogedIn from './Layouts/NotLogedIn.vue';
import { useChatStore } from './stores/useChatStore';
export default{
  data(){
    return {
      adminLogedIn:false,
      logedInAs:""
    }
  }, 
  methods:{
    setUser(){
      const userStore = useChatStore(); 
      userStore.setUser(this.logedInAs);
      this.adminLogedIn = this.logedInAs.toLowerCase() === 'admin';
    },
    logOut(){
      const userStore = useChatStore(); 
      userStore.setUser(null);
      this.adminLogedIn = false;
    }
  },
  computed:{
    ...mapState(useChatStore, ['user']),
    isLogedIn(){
      return this.user !==null;
    },
  },
  mounted(){
    let storedName = localStorage.getItem("userName");
    if(storedName){
      const userStore = useChatStore();
      userStore.setUser(storedName);
      this.logedInAs=storedName
      this.adminLogedIn = this.logedInAs.toLowerCase() === 'admin';
    }

  },
  components:{
    NotLogedIn, 
    LogedIn
  }
}
</script>