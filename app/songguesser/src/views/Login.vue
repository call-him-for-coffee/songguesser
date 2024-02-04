<template>
  <div class="title" align="center">song guesser</div>
  <div class="container">
    <div class="row">
      <div class="col-md-offset-3 col-md-6">
        <form @submit.prevent="login" class="form-horizontal">
          <span class="heading">login page</span>
          <div class="form-group">
            <input type="text" v-model="username" class="form-control" id="inputLogin" name="username" placeholder="login"
              required>
          </div>
          <div class="form-group help">
            <input type="password" v-model="password" class="form-control" id="inputPassword" name="password"
              placeholder="password" required>
          </div>
          <div>
            <nav>
              <button type="submit" class="sex-button">Login</button>
              <router-link to="/registration"><button type="submit" class="sex-button">To registration</button></router-link>
            </nav>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>
  
  
  
<script>
import { HTTP } from '../scripts/api';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log("login clicked")
      HTTP.post('/login/', {
        username: this.username,
        password: this.password,
      })
        .then(response => {
          console.log(response.data);
          this.$router.push('/home');
          localStorage.setItem('username', response.data['username'])
          localStorage.setItem('token', response.data['token'])
          localStorage.setItem('user_id', response.data['user_id'])
        })
        .catch(error => {
          var responseText = error.request.responseText;
          console.error('Login failed:', responseText);
          // window.alert('Login failed:\n\n' + responseText);
        });
    },
  },
};
</script>
  
<style src="../stylesheets/mathsex.css"></style>