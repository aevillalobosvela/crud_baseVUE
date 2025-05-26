<template>
    <div
        class="container-fluid d-flex justify-content-center align-items-center vh-100 fondo-oscuro"
    >
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

import index from '@/services/index';

export default {
    data() {
        return {
            usuario: '',
            password: '',
            error: '',
            authStore: useAuthStore(),
        };
    },
    methods: {
        async loginenter() {
             try {
                const response = await index.login({
                    username: this.usuario,
                    password: this.password,
                });
                console.log(response.data.token)
                this.authStore.login(this.usuario,response.data.token);
                this.$router.push('/inicio');
            } catch (err) {
                this.error = 'Credenciales incorrectas';
            }
        },
    },
};
</script>

<style></style>
