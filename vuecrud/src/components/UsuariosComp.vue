<template>
    <div style="height: 70px"></div>
    <div class="px-5 row">
        <div class="col-md-6">
            <h1 class="mb-3">Usuarios</h1>
            <table id="usuariosTable" class="table">
                <thead class="">
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(usuario, index) in usuarios" :key="usuario.id">
                        <th>{{ usuario.id }}</th>
                        <td>{{ usuario.username }}</td>
                        <td class="text-center">
                            <button
                                class="mx-2 btn btn-primary"
                                type="button"
                                @click="editarusuario(usuario.id)"
                            >
                                Editar
                            </button>
                            <button
                                class="mx-2 btn btn-danger"
                                type="button"
                                @click="borrarusuario(usuario.id)"
                            >
                                Borrar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-md-6 mt-5">
            <form>
                <div class="mb-3">
                    <label for="username" class="form-label">Nombre de usuario</label>
                    <input
                        v-model="nuevo_username"
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Ingresa tu nuevo nombre de usuario"
                    />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import index from '@/services/index';
import $ from 'jquery';
import 'datatables.net-bs5';

export default {
    data() {
        return {
            usuarios: [],
            nuevo_username: '',
        };
    },
    async mounted() {
        await this.obtenerUsuarios();
        this.$nextTick(() => {
            $('#usuariosTable').DataTable();
        });
    },
    methods: {
        async obtenerUsuarios() {
            try {
                const token = localStorage.getItem('token');
                const response = await index.listarUsuarios(token);
                this.usuarios = response.data.datos;
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
                alert('No se pudo cargar la lista de usuarios');
            }
        },
        async editarusuario(id) {
            if (this.nuevo_username == '') {
                alert('Usuario requerido');
            } else {
                try {
                    const response = await index.actualizarUsuario({
                        username: this.nuevo_username,
                        id: id,
                    });
                    this.obtenerUsuarios();
                    console.log(response);
                    alert('Usuario actualizado');
                } catch (error) {
                    console.error('Error', error);
                    alert('Error');
                }
            }
        },
        async borrarusuario(id) {
            try {
                const response = await index.borrarUsuario(id);
                this.obtenerUsuarios();
                console.log(response);
                alert('Usuario borrado');
            } catch (error) {
                console.error('Error', error);
                alert('Error');
            }
        },
    },
};
</script>

<style scoped></style>
