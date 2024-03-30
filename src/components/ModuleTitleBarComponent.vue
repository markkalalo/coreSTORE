<template>
    <div class="page-title">
      <div class="title-caption">
        <h1><strong>{{ title }}</strong></h1>
        <!-- <hr /> -->
      </div>
    </div>
    
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .page-title {
    /* Add your styles here */
    /* background-color: #007C7C; */
    /* color: #fff; */
    /* margin: 10px; */
    border-radius: 5px;
    
  }
  .title-caption{
    padding: 10px;
  }
  h1{
    margin: 0;
    font-size: 30px;
    padding: 10px;
  }
  </style>
  