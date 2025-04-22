<template>
    <div style="height: 70px"></div>
    <div class="container mt-4 row">
        <!-- Tabla de productos -->
        <div class="col-md-6">
            <h4>Productos</h4>
            <table id="productosTable" class="table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio ($)</th>
                        <th>Stock</th>
                        <th>Seleccionar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="producto in productos" :key="producto.id">
                        <td>{{ producto.nombre }}</td>
                        <td>{{ producto.precio }}</td>
                        <td>{{ producto.stock }}</td>
                        <td>
                            <button
                                class="btn btn-primary btn-sm"
                                @click="seleccionarProducto(producto)"
                            >
                                Seleccionar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Formulario y carrito -->
        <div class="col-md-6">
            <h4>Agregar al carrito</h4>
            <div v-if="productoSeleccionado">
                <p>
                    <strong>{{ productoSeleccionado.nombre }}</strong>
                </p>
                <input
                    type="number"
                    v-model.number="cantidad"
                    class="form-control mb-2"
                    :max="productoSeleccionado.stock"
                    :placeholder="`Cantidad (máx. ${productoSeleccionado.stock})`"
                />
                <button class="btn btn-success mb-3" @click="agregarAlCarrito">Agregar</button>
            </div>

            <h5>Carrito</h5>
            <ul class="list-group mb-3">
                <li
                    v-for="(item, index) in carrito"
                    :key="index"
                    class="list-group-item d-flex justify-content-between align-items-center"
                >
                    {{ item.nombre }} (x{{ item.cantidad }}) - ${{ item.precio * item.cantidad }}
                    <button class="btn btn-danger btn-sm" @click="eliminarDelCarrito(index)">
                        Eliminar
                    </button>
                </li>
            </ul>

            <button class="btn btn-primary" @click="comprar">Comprar</button>
            <div v-if="total > 0" class="mt-2 alert alert-info">Total: ${{ total }}</div>
        </div>
    </div>
</template>

<script>
import productosData from '../assets/js/productos.js';
import $ from 'jquery';
import 'datatables.net-bs5';

export default {
    data() {
        return {
            productos: [],
            productoSeleccionado: null,
            cantidad: 1,
            carrito: [],
            total: 0,
        };
    },
    mounted() {
        this.productos = productosData;
        this.$nextTick(() => {
            $('#productosTable').DataTable();
        });
    },
    methods: {
        seleccionarProducto(producto) {
            this.productoSeleccionado = producto;
            this.cantidad = 1;
        },
        agregarAlCarrito() {
            if (
                !this.productoSeleccionado ||
                this.cantidad < 1 ||
                this.cantidad > this.productoSeleccionado.stock
            ) {
                alert('Cantidad inválida o insuficiente stock');
                return;
            }

            this.carrito.push({
                id: this.productoSeleccionado.id,
                nombre: this.productoSeleccionado.nombre,
                precio: this.productoSeleccionado.precio,
                cantidad: this.cantidad,
            });

            this.productoSeleccionado.stock -= this.cantidad;
            this.productoSeleccionado = null;
            this.cantidad = 1;
        },
        eliminarDelCarrito(index) {
            const item = this.carrito[index];
            const producto = this.productos.find((p) => p.id === item.id);
            if (producto) producto.stock += item.cantidad;

            this.carrito.splice(index, 1);
        },
        comprar() {
            this.total = this.carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
            alert(`Compra realizada por $${this.total}`);
            this.carrito = [];
            this.total = 0;
        },
    },
};
</script>
