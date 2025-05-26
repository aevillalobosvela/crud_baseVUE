import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: localStorage.getItem('user') || null,
    token: localStorage.getItem('token') || null,
    isAuth: localStorage.getItem('isAuth') === 'true',
  }),
  actions: {
    login(username, token) {
      this.user = username;
      this.token = token;
      this.isAuth = true;
      localStorage.setItem("user", username);
      localStorage.setItem("token", token);
      localStorage.setItem("isAuth", true);
    },
    logout() {
      this.user = null;
      this.isAuth = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
    },
    loadUserFromStorage() {
      this.user = localStorage.getItem("user");
      this.user = localStorage.getItem("token");
      this.isAuth = true;
    },
  },
});
