<template>
    <div class="container-fluid d-flex justify-content-center align-items-center" style="height: 100vh;">
      <div class="text-center">
        <h1 class="text-primary">404 - Page Not Found</h1>
        <p class="text-muted">Sorry, the page you are looking for does not exist.</p>
        <ButtonComponent primary to="/">Back to Login Page</ButtonComponent>
        <!-- <ButtonComponent secondary to>secondary Button</ButtonComponent> -->
      </div>
    </div>
  </template>
  
  <script>
  // Adjust the import path to match the location of ButtonComponent.vue
  import ButtonComponent from '../components/ButtonComponent.vue'; 
  
  export default {
    name: 'NotFoundPage',
    components: {
      ButtonComponent
    },
    methods: {
      goToLoginPage() {
        // Implement the logic to navigate to the login page
        // For example, if you are using Vue Router:
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom CSS styles here */
  body {
    background-color: #fff;
    font-family: "Roboto", sans-serif;
  }
  
  .container-fluid {
    padding: 0;
  }
  
  .text-center {
    padding: 2rem;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #F06520!important;
  }
  
  p {
    font-size: 1.2rem;
    color: #888888;
    margin-bottom: 1rem;
  }
  
  .btn {
    margin-top: 1rem;
  }
  </style>
  