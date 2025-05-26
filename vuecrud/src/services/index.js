// src/services/userService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/usuario';

export default {
    listarUsuarios(token) {
        const res = axios.get(`${API_URL}/lista`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res;
    },
    insertarUsuario(data) {
        return axios.post(`${API_URL}/insertar`, data);
    },
    login(datos) {
        return axios.post(`${API_URL}/login`, datos);
    },
};
