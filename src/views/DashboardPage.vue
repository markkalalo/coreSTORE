<template>
  
    <SidebarComponent />
    <!-- main content here -->
 
  <div class="main-dashboard">
   Main Dashboard
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
.main-dashboard{
  left: 250px;
  position: relative
}
.header{
    background-color: aqua;
  }
</style>
