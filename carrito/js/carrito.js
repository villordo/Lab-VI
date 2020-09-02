import { Producto } from './producto.js';

export class Carrito{
    constructor(elementCarrito){
        this.elementCarrito = elementCarrito;
        this.items = [];
    }
        renderizar(){
            while (this.elementCarrito.firstChild) this.elementCarrito.removeChild(this.elementCarrito.firstChild)
            this.items.forEach(p => this.elementCarrito.appendChild(crearItemEnCarrito(this, p)))
        }


        agregarItem(producto){
            const element = this.items.find(p => p.id == product.id);
            ++element.cantidad;
            this.renderizar();
        }
        removerItem(producto){
            const element = this.items.find(p => p.id == product.id);
            --element.cantidad;
            this.renderizar();
        }
        removerItemCarrito(producto){
            const elementId = this.items.findIndex(p => p.id == product.id);
            if(element !== -1){
                this.items[elementId].cantidad = 0;
                this.items.splice(elementId,1);
            }
            this.renderizar();
        }
    
}

function crearItemEnCarrito(carrito,producto){
    const liProducto = document.createElement("li");
    liProducto.classList.add("media", "bottom-buffer");

    const productBody = document.createElement("div");
    productBody.classList.add("media-body");

    const titile = document.createElement("h5");
    titile.classList.add("mt-0" ,"mb-1");
    titile.innerHTML = producto.nombre;

    const cantidad = document.createElement("p");
    cantidad.classList.add("cart-text");
    cantidad.innerHTML = "Cantidad: "+producto.cantidad;

    const botonAgregar = crearBotonAgregar(() => carrito.agregarItem(producto));
    const botonRestar = crearBotonRestar(() => carrito.removerItem(producto));
    const botonRemover = crearBotonRemover(() => carrito.removerItemCarrito(producto));

    productBody.appendChild(titile);
    productBody.appendChild(cantidad);
    productBody.appendChild(botonAgregar);
    productBody.appendChild(botonRestar);
    productBody.appendChild(botonRemover);
    liProducto.appendChild(productBody);

    return liProducto;
}

function crearBotonAgregar(func){
    const botonAgregar = document.createElement("button");
    boton.classList.add("btn" ,"btn-success", "btn-sm ml-3");
    boton.innerHTML = "+";
    botonAgregar.addEventListener("click", func)
    return botonAgregar;
}
function crearBotonRestar(func){
    const botonRestar = document.createElement("button");
    boton.classList.add("btn" ,"btn-warning", "btn-sm ml-3");
    boton.innerHTML = "-";
    botonRestar.addEventListener("click", func);
    return func;
}
function crearBotonRemover(func){
    const botonRemoverDelCarrito = document.createElement("button");
    boton.classList.add("btn" ,"btn-danger", "btn-sm ml-3");
    boton.innerHTML = "x";
    botonRemoverDelCarrito.addEventListener("click", func);
    return func;
}