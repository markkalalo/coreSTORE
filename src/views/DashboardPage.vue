<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <SidebarComponent />
      </div>
      <!-- main content here -->
      <div class="col-md-10 main-content">
        <div class="main-dashboard">
          <ModuleTitleBarComponent title="Dashboard" />
          <div class="row p-3">
            
            <div class="col-md-3 col-12 p-2">
              <div class="dashboard-box">
                <div class="total">6</div>
                <div class="dashboard-box-caption">
                  Total Sales
                </div>
              </div>
            </div>

            <div class="col-md-3 col-12 p-2">
              <div class="dashboard-box">
                <div class="total">6</div>
                <div class="dashboard-box-caption">
                  Total Sales
                </div>
              </div>
            </div>

            <div class="col-md-3 col-12 p-2">
              <div class="dashboard-box">
                <div class="total">6</div>
                <div class="dashboard-box-caption">
                  Total Sales
                </div>
              </div>
            </div>

            <div class="col-md-3 col-12 p-2">
              <div class="dashboard-box">
                <div class="total">6</div>
                <div class="dashboard-box-caption">
                  Total Sales
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from '../components/SidebarComponent.vue';
import ModuleTitleBarComponent from '../components/ModuleTitleBarComponent.vue';

export default {
  components: {
    SidebarComponent,
    ModuleTitleBarComponent
  },
  // main page logic here 
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


/* main page styles here */
body, html, .container-fluid, .row, .col-md-10 {
  overflow-x: hidden;
}
.main-content {
  width: 100%;
}


.header{
    background-color: aqua;
  }
</style>
