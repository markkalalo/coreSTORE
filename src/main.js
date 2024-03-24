// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Verify the path to the router file

const app = createApp(App);

// Use Vue Router
app.use(router);

// Mount the app
app.mount('#app');
