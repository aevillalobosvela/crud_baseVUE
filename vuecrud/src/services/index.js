// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export default {
    listarUsuarios(token) {
        const res = axios.get(`${API_URL}/usuario/lista`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res;
    },
    insertarUsuario(data) {
        return axios.post(`${API_URL}/usuario/insertar`, data);
    },
    actualizarUsuario(data) {
        return axios.put(`${API_URL}/usuario/actualizar`, data);
    },
    borrarUsuario(id) {
        return axios.delete(`${API_URL}/usuario/borrar/${id}`);
    },
    login(datos) {
        return axios.post(`${API_URL}/usuario/login`, datos);
    },
};
