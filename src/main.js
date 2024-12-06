import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.mount('#app');
