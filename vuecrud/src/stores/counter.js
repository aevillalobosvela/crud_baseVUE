import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: localStorage.getItem('user') || null,
    password: localStorage.getItem('password') || null,
    isAuth: localStorage.getItem('isAuth') === 'true',
  }),
  actions: {
    login(username, password) {
      this.user = username;
      this.password = password;
      this.isAuth = true;
      localStorage.setItem("user", username);
      localStorage.setItem("password", password);
      localStorage.setItem("isAuth", true);
      console.log(localStorage)
    },
    logout() {
      this.user = null;
      this.password = null;
      this.isAuth = null;
      localStorage.removeItem("user");
      localStorage.removeItem("password");
      localStorage.removeItem("isAuth");
    },
    loadUserFromStorage() {
      this.user = localStorage.getItem("user");
      this.password = localStorage.getItem("password");
      this.isAuth = true;
    },
  },
});
