<template lang="">
    <header data-bs-theme="dark">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">CRUD</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a
                                @click="irinicio"
                                class="nav-link active"
                                aria-current="page"
                                href="#"
                                >Inicio</a
                            >
                        </li>
                        <li class="nav-item">
                            <a @click="irusuarios" class="nav-link" href="#">Ver usuarios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Ver tareas</a>
                        </li>
                        <li class="nav-item">
                            <a @click="ircarrito" class="nav-link" href="#">Carrito de compras</a>
                        </li>
                    </ul>
                    <p class="text-white text-center mt-3 mx-3" v-if="usuario">
                        Bienvenido, {{ usuario }}
                    </p>
                    <div>
                        <button v-if="usuario" type="button" @click="logout" class="btn btn-danger">
                            Cerrar Sesion
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { useAuthStore } from '../stores/counter';

export default {
    data() {
        return {
            usuario: '',
            authStore: useAuthStore(),
        };
    },
    methods: {
        logout() {
            this.authStore.logout();
            this.$router.push('/');
        },
        irusuarios() {
            this.$router.push('/usuarios');
        },
        irinicio() {
            this.$router.push('/inicio');
        },
        ircarrito() {
            this.$router.push('/carrito');
        },
    },
    mounted() {
        this.authStore.loadUserFromStorage();
        this.usuario = localStorage.getItem('user');
    },
};
</script>
<style></style>
