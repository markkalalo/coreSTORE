<template>
  <div class="d-lg-flex half">
    <div class="bg order-1 order-md-2 d-lg-block d-md-none d-none" :style="{ backgroundImage: 'url(' + require('@/assets/istockphoto-610005158-612x612.jpg') + ')' }"></div>

    <div class="contents order-2 order-md-1">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-7">
            
            <!-- <h3>Login to <strong>coreSTORE</strong></h3> -->
            <img class="mb-2" src="../assets/coreSTORE.jpeg" alt="corestore" width="50%">
            <p class="mb-1">Welcome to coreSTORE. To continue, login using your username and password.</p>
            
            <!-- <p>To continue, login using your username and password.</p> -->
            <form @submit.prevent="login">
              <div class="form-group first">
                <label for="username">Username</label>
                <input type="text" class="form-control" placeholder="Username" v-model="username" required>
              </div>
              <div class="form-group last mb-1">
                <label for="password">Password</label>
                <input type="password" class="form-control" placeholder="Password" v-model="password" required>
              </div>
              <div class="d-flex mb-2 mb-0 align-items-center">
                
                <span class="ml-auto"><router-link to="/reset-password" class="forgot-pass">Reset Password?</router-link></span>
              </div>
              <!-- <button type="submit" class="btn btn-block btn-primary">Log In</button> -->
              <ButtonComponent primary to>Log In</ButtonComponent>
              <!-- Display error message -->
            <p v-if="errorMessage" class="error-message text-center">{{ errorMessage }}</p>
            </form>
            
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
</template>

<!-- BELOW IS THE CODE THAT UTILIZES AXIOS TO INTERACT WITH A FAKE RESTFUL API -->
<!-- Follow the steps below to install Axios and set up the fake API using JSON Server -->

<!-- Step 1: Install Axios -->
<!-- Open your terminal or command prompt and navigate to the current directory of your project -->
<!-- Run the following command to install Axios: -->
<!-- npm install axios -->

<!-- Step 2: Set up the Fake API using JSON Server -->
<!-- JSON Server allows you to quickly create a RESTful API with fake data for testing and prototyping -->

<!-- a. Install JSON Server globally (if not already installed) -->
<!-- Run the following command in your terminal: -->
<!-- npm install -g json-server -->

<!-- b. Create a db.json file in the root directory of your project -->
<!-- Define the structure of your fake data in this file -->

<!-- c. Start JSON Server and watch the db.json file for changes -->
<!-- Run the following command in your terminal: -->
<!-- npx json-server --watch db.json -->

<!-- Now, you have successfully set up Axios to interact with your fake RESTful API using JSON Server -->

<script>
import ButtonComponent from '../components/ButtonComponent.vue';
// import axios from 'axios';
import router from '../router';
import AxiosInstance from '../api/axiosInstance'

export default {
  name: 'LoginPage',
  components: {
    ButtonComponent
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ""
    };
  },
  methods: {
    async login() {
      try {
        // const RESTapiUrl = 'http://localhost:3000/users'; // npx json-server --watch db.json
        const response = await AxiosInstance.get("/users");
        const users = response.data;
        const matchedUser = users.find(user => user.username === this.username && user.password === this.password);

        if (matchedUser) {
          router.push('/dashboard');
        } else {
          this.errorMessage = 'Invalid username or password.';
          // Clear error message after 3 seconds
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
        }
      } catch (error) {
        console.error('Error fetching users from db.json:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Custom CSS styles  */
body {
  background-color: #fff;
}

p {
  color: #888888;
  font-weight: 300;
}

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  font-family: "Roboto", sans-serif;
}

a {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
}

a:hover {
  text-decoration: none !important;
}

.content {
  padding: 7rem 0;
}

h2 {
  font-size: 20px;
}

.half, .half .container > .row {
  height: 100vh;
}

@media (max-width: 991.98px) {
  .half .bg {
    height: 500px;
  }
}

.half .contents, .half .bg {
  width: 50%;
}

@media (max-width: 1199.98px) {
  .half .contents, .half .bg {
    width: 100%;
  }
}

.half .contents .form-group, .half .bg .form-group {
  margin-bottom: 0;
  border: 1px solid #efefef;
  padding: 15px 15px;
  border-bottom: none;
}

.half .contents .form-group.first, .half .bg .form-group.first {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

.half .contents .form-group.last, .half .bg .form-group.last {
  border-bottom: 1px solid #efefef;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
}

.half .contents .form-group label, .half .bg .form-group label {
  font-size: 12px;
  display: block;
  margin-bottom: 0;
  color: #b3b3b3;
}

.half .contents .form-control, .half .bg .form-control {
  border: none;
  padding: 0;
  font-size: 15px;
  border-radius: 0;
}

.half .contents .form-control:active, .half .contents .form-control:focus, .half .bg .form-control:active, .half .bg .form-control:focus {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.half .bg {
  background-size: cover;
  background-position: center;
}

.half a {
  color: #888;
  text-decoration: underline;
}

.half .btn {
  height: 45px;
  padding-left: 25px;
  padding-right: 25px;
  font-size: 15px;
  background-color: #F06520;
  border: none;
}
.half .btn:focus{
  box-shadow: none;
}

/* .half .forgot-pass {
   position: relative;
  top: 2px; 
  font-size: 14px;
} */

.control {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 14px;
}

.control .caption {
  position: relative;
  top: .2rem;
  color: #888;
}

.control input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.control__indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background: #e6e6e6;
  border-radius: 4px;
}

.control--radio .control__indicator {
  border-radius: 50%;
}

.control:hover input ~ .control__indicator, .control input:focus ~ .control__indicator {
  background: #ccc;
}

.control input:checked ~ .control__indicator {
  background: #007bff;
}

.control:hover input:not([disabled]):checked ~ .control__indicator, .control input:checked:focus ~ .control__indicator {
  background: #1a88ff;
}

.control input:disabled ~ .control__indicator {
  background: #e6e6e6;
  opacity: 0.9;
  pointer-events: none;
}

.control__indicator:after {
  font-family: 'icomoon';
  content: '\e5ca';
  position: absolute;
  display: none;
  font-size: 16px;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
}

.control input:checked ~ .control__indicator:after {
  display: block;
  color: #fff;
}

.control--checkbox .control__indicator:after {
  top: 50%;
  left: 50%;
  margin-top: -1px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.control--checkbox input:disabled ~ .control__indicator:after {
  border-color: #7b7b7b;
}

.control--checkbox input:disabled:checked ~ .control__indicator {
  background-color: #7e0cf5;
  opacity: .2;
}
.col-md-7{
  -webkit-box-shadow: 0px 0px 124px 1px rgba(0,0,0,0.23);
-moz-box-shadow: 0px 0px 124px 1px rgba(0,0,0,0.23);
box-shadow: 0px 0px 124px 1px rgba(0,0,0,0.23);
padding: 30px;
}
.justify-content-center{
padding: 15px;

}
@media (max-width: 991px) {
  .justify-content-center{
  margin-top: -60px;
  }
}
.error-message{
  color: red;
  font-weight: bold;
}

</style>
