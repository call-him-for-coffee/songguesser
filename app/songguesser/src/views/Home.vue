<template>
  <div class="row">
    <div class="col-md-offset-3 col-md-6">
      <div class="flex-container">
        <span class="name">{{ auth_username }}</span>
        <button class="sex-button" @click="onExitClick">Logout</button>
      </div>
    </div>
  </div>
</template>
  

<script>
import { HTTP } from '../scripts/api';

export default {
  data() {
    return {
      auth_username: '',
    }
  },
  methods: {
    onExitClick() {
      console.log("onExitClick")
      localStorage.removeItem("username")
      localStorage.removeItem("token")
      localStorage.removeItem("user_id")
      this.$router.push('/login')
    }
  },
  beforeMount() {
    console.log("beforeMount")
    this.auth_username = localStorage.getItem("username")
  }
};



</script>

  
<style src="../stylesheets/mathsex.css"></style>
  