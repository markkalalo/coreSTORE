<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <SidebarComponent />
      </div>
      <!-- main content here -->
      <div class="col-md-10 main-content">
        <div class="main-dashboard">
          <div>
            Main Dashboard
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import SidebarComponent from '../components/SidebarComponent.vue';

export default {
  components: {
    SidebarComponent
  },
  // main page logic here 
};
</script>

<style scoped>
/* main page styles here */
body, html, .container-fluid, .row, .col-md-10 {
  overflow-x: hidden;
}
.main-content {
  width: 100%;
}
.main-dashboard{
  /* padding: 10px; */
  /* left: 250px;
  position: relative */
}
.header{
    background-color: aqua;
  }
</style>
