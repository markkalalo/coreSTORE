<template>
    <div class="d-lg-flex half">
      <div class="bg order-1 order-md-2 d-lg-block d-md-none d-none" :style="{ backgroundImage: 'url(' + require('@/assets/istockphoto-610005158-612x612.jpg') + ')' }"></div>
  
      <div class="contents order-2 order-md-1">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7">
              <!-- <h3>Reset Password</h3> -->
              <img class="mb-2" src="../assets/coreSTORE.jpeg" alt="corestore" width="50%">
              <p class="mb-1">Enter your email associated with the account to reset your password.</p>
              <form @submit.prevent="resetPassword">
                <div class="form-group first">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" placeholder="Email" v-model="email" required>
                </div>
                <div class="d-flex mb-2 mb-0 align-items-center">
                
                <span class="ml-auto"><router-link to="/" class="forgot-pass"> Go back to Login</router-link></span>
              </div>
                <button type="submit" class="btn btn-block btn-primary">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResetPasswordPage',
    data() {
      return {
        email: ''
      };
    },
    methods: {
      resetPassword() {
        // Handle reset password logic here
      }
    }
  };
  </script>
  
  <style scoped>

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
  </style>
  