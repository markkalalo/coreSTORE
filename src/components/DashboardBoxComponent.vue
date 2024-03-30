<template>
    <div class="col-md-3 col-12 p-2">
              <div class="dashboard-box">
                <div class="total">6</div>
                <div class="dashboard-box-caption">
                  {{ title }}
                </div>
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
.dashboard-box{
  -webkit-box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.23);
-moz-box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.23);
box-shadow: 0px 0px 16px 2px rgba(0,0,0,0.23);
padding: 30px;
background-color:#fff;
}
  </style>
  