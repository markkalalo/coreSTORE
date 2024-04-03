<template>
  <div class="nav-side-menu">
    <router-link to="/dashboard">
              <img v-if="!sidebarActive" class="mb-0 logo-corestore" src="../assets/header_logo.png" alt="corestore" width="100%">
            </router-link>
    <div class="brand">Press Curing Control</div>
    <i class="fa fa-bars fa-2x toggle-btn" @click="toggleMenu" data-toggle="collapse" data-target="#menu-content"></i>
  
    <div class="menu-list">
      <ul id="menu-content" :class="menuClass">
        <router-link to="/dashboard">
          <li>
          <a href="#">
            <i class="fa fa-dashboard fa-lg"></i> Dashboard
          </a>
        </li>
        </router-link>

        <li @click="toggleSubMenu('inventory')" :class="{ 'active': activeMenu === 'inventory' }" data-toggle="collapse" data-target="#inventory" :aria-expanded="activeMenu === 'inventory' ? 'true' : 'false'" class="collapsed">
          <a href="#"><i class="fa fa-gift fa-lg"></i> Inventory <span class="arrow"></span></a>
        </li>
        <ul class="sub-menu collapse" id="inventory" v-if="activeMenu === 'inventory'">
          <!-- <li class="active"><a href="#">Inventory 1</a></li> -->
          <router-link to="/item"><li><a href="#">Items</a></li></router-link>
          <li><a href="#">Inventory 2</a></li>
          <li><a href="#">Inventory 3</a></li>
        </ul>

        <li @click="toggleSubMenu('fulfillment')" :class="{ 'active': activeMenu === 'fulfillment' }" data-toggle="collapse" data-target="#fulfillment" :aria-expanded="activeMenu === 'fulfillment' ? 'true' : 'false'" class="collapsed">
          <a href="#"><i class="fa fa-globe fa-lg"></i> Fulfillment <span class="arrow"></span></a>
        </li>
        <ul class="sub-menu collapse" id="fulfillment" v-if="activeMenu === 'fulfillment'">
          <li>Fulfillment 1</li>
          <li>Fulfillment 2</li>
          <li>Fulfillment 3</li>
        </ul>

        <li @click="toggleSubMenu('reporting')" :class="{ 'active': activeMenu === 'reporting' }" data-toggle="collapse" data-target="#reporting" :aria-expanded="activeMenu === 'reporting' ? 'true' : 'false'" class="collapsed">
          <a href="#"><i class="fa fa-car fa-lg"></i> Reporting <span class="arrow"></span></a>
        </li>
        <ul class="sub-menu collapse" id="reporting" v-if="activeMenu === 'reporting'">
          <li>Reporting 1</li>
          <li>Reporting 2</li>
          <li>Reporting 3</li>
        </ul>

        <li>
          <a href="#">
            <i class="fa fa-user fa-lg"></i> Profile
          </a>
        </li>

        <li @click="toggleSubMenu('service')" :class="{ 'active': activeMenu === 'service' }" data-toggle="collapse" data-target="#service" :aria-expanded="activeMenu === 'service' ? 'true' : 'false'" class="collapsed">
          <a href="#"><i class="fa fa-car fa-lg"></i> Service <span class="arrow"></span></a>
        </li>
        <ul class="sub-menu collapse" id="service" v-if="activeMenu === 'service'">
          <li>Service 1</li>
          <li>Service 2</li>
        </ul>
        <router-link to="/">
        <li>
          <a href="#">
            <i class="fa fa-power-off fa-lg"></i> Logout
          </a>
        </li>
      </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
  return {
    sidebarActive: false,
    activeMenu: null
  };
},
  computed: {
    menuClass() {
      return {
        'menu-content': true,
        'collapse': true,
        'out': true,
      };
    },
  },
  methods: {
    toggleMenu() {
      //  toggleMenu logic here
    },
    toggleSubMenu(menu) {
      if (this.activeMenu === menu) {
        this.activeMenu = '';
      } else {
        this.activeMenu = menu;
      }
    },
  },
};
</script>

<style scoped>
.nav-side-menu {
  overflow: auto;
  font-family: verdana;
  font-size: 12px;
  font-weight: 200;
  background-color: #2e353d;
  position: fixed;
  top: 0px;
  width: 250px;
  height: 100%;
  color: #e1ffff;
}
.nav-side-menu .brand {
  background-color: #23282e;
  line-height: 50px;
  display: block;
  text-align: center;
  font-size: 14px;
}
.nav-side-menu .toggle-btn {
  display: none;
}
.nav-side-menu ul,
.nav-side-menu li {
  list-style: none;
  padding: 0px;
  margin: 0px;
  line-height: 35px;
  cursor: pointer;
  /*    
    .collapsed{
       .arrow:before{
                 font-family: FontAwesome;
                 content: "\f053";
                 display: inline-block;
                 padding-left:10px;
                 padding-right: 10px;
                 vertical-align: middle;
                 float:right;
            }
     }
*/
}
.nav-side-menu ul :not(collapsed) .arrow:before,
.nav-side-menu li :not(collapsed) .arrow:before {
  font-family: FontAwesome;
  content: "\f078";
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: middle;
  text-align: right;
}


.nav-side-menu ul .active,
.nav-side-menu li .active {
  border-left: 3px solid #d19b3d;
  background-color: #4f5b69;
}
.nav-side-menu ul .sub-menu li.active,
.nav-side-menu li .sub-menu li.active {
  color: #d19b3d;
}

.nav-side-menu ul .sub-menu li.active a,
.nav-side-menu li .sub-menu li.active a {
  color: #d19b3d;
}
.nav-side-menu ul .sub-menu li,
.nav-side-menu li .sub-menu li {
  background-color: #181c20;
  border: none;
  line-height: 28px;
  border-bottom: 1px solid #23282e;
  margin-left: 0px;
}
.nav-side-menu ul .sub-menu li:hover,
.nav-side-menu li .sub-menu li:hover {
  background-color: #020203;
}
.nav-side-menu ul .sub-menu li:before,
.nav-side-menu li .sub-menu li:before {
  font-family: Fontawesome;
  content: "\f105";
  display: inline-block;
  padding-left: 20px;
  padding-right: 10px;
  vertical-align: middle;
}
.nav-side-menu li {
  padding-left: 0px;
  border-left: 3px solid #2e353d;
  border-bottom: 1px solid #23282e;
}
.nav-side-menu li a {
  text-decoration: none;
  color: #e1ffff;
}
.nav-side-menu li a i {
  padding-left: 10px;
  width: 20px;
  padding-right: 20px;
}
.nav-side-menu li:hover {
  border-left: 3px solid #d19b3d;
  background-color: #4f5b69;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
@media (max-width: 767px) {
  .nav-side-menu {
    position: relative;
    width: 100%;
    /* margin-bottom: 10px; */
  }
  .nav-side-menu .toggle-btn {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10 !important;
    padding: 3px;
    background-color: #ffffff;
    color: #000;
    width: 40px;
    text-align: center;
  }
  .brand {
    text-align: left !important;
    font-size: 22px;
    padding-left: 20px;
    line-height: 50px !important;
  }
}
@media (min-width: 767px) {
  .nav-side-menu .menu-list .menu-content {
    display: block;
  }
}
body {
  margin: 0px;
  padding: 0px;
}

.nav-side-menu ul .sub-menu ul .sub-line li.active,
.nav-side-menu li .sub-menu li .sub-line li.active {
  color: #d19b3d;
}

.nav-side-menu ul .sub-menu li .sub-line li.active a,
.nav-side-menu li .sub-menu li .sub-line li.active a {
  color: #d19b3d;
}
.nav-side-menu ul .sub-menu li .sub-line li,
.nav-side-menu li .sub-menu li .sub-line li {
  background-color: #181c20;
  border: none;
  line-height: 28px;
  border-bottom: 1px solid #23282e;
  margin-left: 0px;
}
.nav-side-menu ul .sub-menu li .sub-line li:hover,
.nav-side-menu li .sub-menu li .sub-line li:hover {
  background-color: #020203;
}
.nav-side-menu ul .sub-menu li .sub-line li:before,
.nav-side-menu li .sub-menu li .sub-line li:before {
  font-family: FontAwesome;
  content: "\f105";
  display: inline-block;
  padding-left: 100px;
  padding-right: 10px;
  vertical-align: middle;
}

.nav-side-menu .sub-menu li {
  padding-left: 20px;
  border-left: 3px solid #2e353d;
  border-bottom: 1px solid #23282e;
}
.nav-side-menu .sub-menu li a {
  text-decoration: none;
  color: #e1ffff;
}
.sub-menu li a i {
  padding-left: 10px;
  width: 20px;
  padding-right: 20px;
}
.nav-side-menu li .sub-menu li:hover {
  border-left: 3px solid #d19b3d;
  background-color: #4f5b69;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
@media (max-width: 767px) {
 .nav-side-menu .sub-menu {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
  }
}
.nav-side-menu  .sub-menu .toggle-btn {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10 !important;
    padding: 3px;
    background-color: #ffffff;
    color: #000;
    width: 40px;
    text-align: center;
  }
  
  .sub-line ul .sub-press li.active,
.sub-line li .sub-press li.active {
  color: #d19b3d;
}

.sub-line ul .sub-press li.active a,
.sub-line li .sub-press li.active a {
  color: #d19b3d;
}
.sub-line ul .sub-press li,
.sub-line li .sub-press li {
  background-color: #181c20;
  border: none;
  line-height: 28px;
  border-bottom: 1px solid #23282e;
  margin-left: 0px;
}
.sub-line ul .sub-press li:hover,
.sub-line li .sub-press li:hover {
  background-color: #020203;
}
.sub-line ul .sub-press li:before,
.sub-line li .sub-press li:before {
  font-family: Arial;
  content: "\f105";
  display: inline-block;
  padding-left: 50px;
  padding-right: 10px;
  vertical-align: middle;
}

.sub-line li {
  padding-left: 20px;
  border-left: 3px solid #2e353d;
  border-bottom: 1px solid #23282e;
}
.sub-line li a {
  text-decoration: none;
  color: #e1ffff;
}
.sub-line li a i {
  padding-left: 50px;
  width: 20px;
  padding-right: 20px;
}
.sub-line li:hover {
  border-left: 3px solid #d19b3d;
  background-color: #4f5b69;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
@media (max-width: 767px) {
  .sub-line {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
  }
  .sub-line .toggle-btn {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10 !important;
    padding: 3px;
    background-color: #ffffff;
    color: #000;
    width: 40px;
    text-align: center;
  }
  .logo-corestore{
    display: none;
  }
}
</style>
