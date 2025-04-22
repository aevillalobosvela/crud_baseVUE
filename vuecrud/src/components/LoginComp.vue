<template>
    <div class="container-fluid d-flex justify-content-center align-items-center vh-100 fondo-oscuro">
        <div class="card p-4 shadow" style="width: 350px">
            <h3 class="text-center mb-3">Iniciar Sesión</h3>
            <form @submit.prevent="loginenter">
                <div class="mb-3">
                    <label for="usuario" class="form-label">Usuario</label>
                    <input
                        type="text"
                        v-model="usuario"
                        class="form-control"
                        id="usuario"
                        placeholder="Ingrese su usuario"
                        required
                    />
                </div>
                <div class="">
                    <label for="password" class="form-label">Contraseña</label>
                    <input
                        type="password"
                        v-model="password"
                        class="form-control"
                        id="password"
                        placeholder="Ingrese su contraseña"
                        required
                    />
                </div>
                <div class="mt-3">
                    <button type="submit" class="btn btn-primary w-100">Ingresar</button>
                </div>
            </form>
            <div style="margin-bottom: 0" v-if="error" class="alert alert-danger mt-2" role="alert">
                {{ error }}
            </div>
        </div>
    </div>
</template>
<script>
import { useAuthStore } from '../stores/counter';

export default {
    data() {
        return {
            usuario: '',
            password: '',
            error: '',
            authStore: useAuthStore(), // ✅ Moverlo aquí dentro
        };
    },
    methods: {
        loginenter() {
            if (this.usuario === 'admin') {
                this.authStore.login(this.usuario, this.password);
                alert('Moviendose');
                this.$router.push('/inicio');
            } else {
                this.error = 'Usuario no encontrado';
            }
        },
    },
};
</script>

<style></style>
