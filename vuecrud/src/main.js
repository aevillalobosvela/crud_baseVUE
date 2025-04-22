import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import { useAuthStore } from './stores/counter';
const authStore = useAuthStore();
if (localStorage.getItem('user')) {
    authStore.usuario = localStorage.getItem('user');
    authStore.isAuthenticated = true;
}

app.mount('#app')
