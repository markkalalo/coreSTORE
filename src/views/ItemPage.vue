<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <SidebarComponent />
        </div>
        <!-- main content here -->
        <div class="col-md-10 main-content">
          <div class="main-dashboard">
            <ModuleTitleBarComponent title="Items" />
            <div class="row p-3">
              <!-- This is the page content -->
              <!-- 

                On going
               -->

                <!-- end of page content -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SidebarComponent from '../components/MainSideBarComponent.vue';
  import ModuleTitleBarComponent from '../components/ModuleTitleBarComponent.vue';
  
  export default {
    components: {
      SidebarComponent,
      ModuleTitleBarComponent
    },
  };
  </script>
  
  <style scoped>
  body, html, .container-fluid, .row, .col-md-10 {
    overflow-x: hidden;
  }
  .main-content {
    width: 100%;
  }

  </style>
  