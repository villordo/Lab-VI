import { ListaProducto } from './lista-producto.js';
//import { Carrito } from './carrito.js';

window.onload = () => {

    //const carrito = new Carrito(document.getElementById('carrito'));
    //carrito.renderizar();

    const productos = new ListaProducto(document.getElementById('lista-producto'));
    productos.renderizar();

}
