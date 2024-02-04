<template>
  <div class="title" align="center">song guesser</div>
  <div class="container">
    <div class="row">
      <div class="col-md-offset-3 col-md-6">
        <form @submit.prevent="register" class="form-horizontal">
          <span class="heading">registration</span>
          <div class="form-group">
            <input type="text" v-model="username" class="form-control" id="inputLogin" name="username"
              placeholder="login" required>
          </div>

          <div class="form-group">
            <input type="password" v-model="password" class="form-control" id="inputPassword" name="password1"
              placeholder="password" required>
          </div>

          <div>
            <nav>
              <button type="submit" class="sex-button">Registrate</button>
              <router-link to="/login"><button type="submit" class="sex-button">To login</button></router-link>
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
    register() {
      console.log("on register clicked");
      console.log(this.username);
      console.log(this.password);

      HTTP.post('/users/', {
        username: this.username,
        password: this.password,
      })
        .then(response => {
          console.log(response.data);
          this.$router.push('/');
        })
        .catch(error => {
          var responseText = error.request.responseText;
          console.error('Registration failed:', responseText);
          window.alert('Registration failed:\n\n' + responseText);
        });
    },
  },
};
</script>
  

<style src="../stylesheets/mathsex.css"></style>