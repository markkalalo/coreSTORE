// router.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './views/LoginPage.vue'; 
import DashboardPage from './views/DashboardPage.vue'; 
import ResetPasswordPage from './views/ResetPasswordPage.vue';
import NotFound404Page from './views/NotFound404Page.vue'; 
import ItemPage from './views/ItemPage.vue';
import RegistrationPage from './views/RegistrationPage.vue';

// Define routes
const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'dashboard', 
    component: DashboardPage 
  },
  {
    path: '/reset-password',
    name: 'reset', 
    component: ResetPasswordPage 
  },
  // Redirect root path to login page
  {
    path: '/',
    redirect: { name: 'login' }
  },

  // Define a wildcard route for unmatched routes
  {
    path: '/:catchAll(.*)', // Matches any path
    component: NotFound404Page // Render your custom 404 page
  },

  // Item Page
  {
    path: '/item',
    name: 'item', 
    component: ItemPage 
  },
  // Registration Page
  {
    path: '/registration',
    name: 'registration', 
    component: RegistrationPage 
  }
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
