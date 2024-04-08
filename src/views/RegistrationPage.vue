<template>
    <div class="d-lg-flex half">
      <div class="bg order-1 order-md-2 d-lg-block d-md-none d-none" :style="{ backgroundImage: 'url(' + require('@/assets/istockphoto-610005158-612x612.jpg') + ')' }"></div>
  
      <div class="contents order-2 order-md-1">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7">
              
              <img class="mb-2" src="../assets/coreSTORE.jpeg" alt="corestore" width="50%">
              <p class="mb-2 mt-2">Welcome to coreSTORE! If you're new here, you'll need to register before accessing our services.</p>
              <p>Please fill out the following information to create your account:</p>
              
              <form @submit.prevent="register">
                <div class="form-group first">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" placeholder="Username" v-model="registrationusername" required>
                </div>
                <div class="form-group last">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" placeholder="************" v-model="registrationpassword" required>
                </div>
                <div class="form-group confirm">
                  <label for="confirmpassword">Confirm Password</label>
                  <input type="password" class="form-control" placeholder="************" v-model="confirmPassword" required>
                </div>
                <div class="form-group customercode mb-1">
                  <label for="customer-code">Customer Code</label>
                  <input type="text" class="form-control" placeholder="Customer Code" v-model="customerCode" required>
                </div>
                <div class="d-flex mb-2 mb-0 align-items-center">
                  <span class="ml-auto">Already have an account? <router-link to="/" class="forgot-pass">Log in</router-link></span>
                </div>
                <ButtonComponent primary to>Submit</ButtonComponent>
                <!-- Display error message -->
                <p v-if="errorMessage" class="error-message text-center">{{ errorMessage }}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ButtonComponent from '../components/ButtonComponent.vue';
  import AxiosInstance from '../api/axiosInstance';
  import router from '../router';
  
  export default {
    name: 'RegistrationPage',
    components: {
      ButtonComponent
    },
    data() {
      return {
        registrationusername: '',
        registrationpassword: '',
        confirmPassword: '',
        customerCode: '',
        errorMessage: ''
      };
    },
    methods: {
      async register() {
        try {
          if (this.registrationpassword !== this.confirmPassword) {
            this.errorMessage = 'Passwords do not match.';
            return;
          }
          const newUser = {
            registrationusername: this.registrationusername,
            registrationpassword: this.registrationpassword,
            customerCode: this.customerCode
          };
          await AxiosInstance.post("/users", newUser);
          router.push('/login');
        } catch (error) {
          console.error('Error registering user:', error);
          this.errorMessage = 'An error occurred during registration.';
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
    border: 1px solid #d0d0d0;
    padding: 15px 15px;
    border-bottom: none;
  }
  
  .half .contents .form-group.first, .half .bg .form-group.first {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  
  .half .contents .form-group.last, .half .bg .form-group.last {
    /* border-bottom: 1px solid #d0d0d0; */
    /* border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px; */
  }

  .half .contents .form-group.confirm, .half .bg .form-group.last {
    /* border-bottom: 1px solid #d0d0d0; */
    /* border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px; */
  }

  .half .contents .form-group.customercode, .half .bg .form-group.last {
    border-bottom: 1px solid #d0d0d0;
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
    /* text-decoration: underline; */
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
  