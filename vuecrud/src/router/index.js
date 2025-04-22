import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/counter';
import LoginView from '../views/LoginView.vue'
import InicioView from '../views/InicioView.vue'
import UsuariosView from '../views/UsuariosView.vue'
import CarritoView from '../views/CarritoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: InicioView,
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (!authStore.isAuth) {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: UsuariosView,
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (!authStore.isAuth) {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: CarritoView,
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (!authStore.isAuth) {
          next('/');
        } else {
          next();
        }
      }
    },

  ],
})

export default router
