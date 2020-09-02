import { Producto } from './producto.js';

export class ListaProducto{

    //en este caso recive el <ul id="carrito"> y el <div id="lista-producto">
    constructor(carrito,elementListaProducto){
        // this.carrito=carrito;
        this.elementListaProducto=elementListaProducto;
        this.productos=[
            new Producto(1,"sugus",10,1000),
            new Producto(2,"pico dulce",15,1000),
            new Producto(3,"helado epa",50,100),
            new Producto(4,"serenito",40,130),
            new Producto(5,"palito de la selva",5,1000),
            new Producto(6,"alfajor grandote",25,600)
        ];
    }

    renderizar(){
        while (this.elementListaProducto.firstChild) this.elementListaProducto.removeChild(this.elementListaProducto.firstChild)
        this.productos.forEach(p => this.elementListaProducto.appendChild(crearElementoListaProductos(this, p)))
    }

    agregarProducto(producto){
        const item = this.items.find(p => p.id == producto.id)
        if(typeof item === 'undefined'){ // si el producto todavia no existe en el carrito lo agrega.
            this.carrito.items.push(producto);
            ++producto.cantidad;
            this.renderizar();
        }else{ //sino simplemente aumenta su cantidad.
            ++producto.cantidad;
            this.renderizar();
        }
    }

}
    function crearElementoListaProductos(elementoListaProducto,producto) {
    
        //Primero creamos los elementos correspondientes y asignamos sus properties
        const productColumn = document.createElement("div");
        productColumn.classList.add("col-lg-6", "col-xl-4");
    
        const productCard = document.createElement("div");
        productCard.classList.add("card", "top-buffer");
    
        const productBody = document.createElement("div");
        productBody.classList.add("card-body");

        const innerRow = document.createElement("div");
        innerRow.classList.add("row");
    
        const nombreProducto = document.createElement("h4");
        nombreProducto.classList.add("card-title");
        nombreProducto.innerHTML = producto.nombre;

        const precio = document.createElement("p");
        precio.innerHTML = "Precio: "+producto.precio;

        const botonCompra = crearBoton(() => elementoListaProducto.agregarProducto(producto)); //crea el boton y le asigna como evento onclick el agregarProducto()
   
        //Por ultimo 'unimos' lo elementos y lo retornamos
        productBody.appendChild(nombreProducto);
        productBody.appendChild(precio);
        productBody.appendChild(botonCompra);
        productCard.appendChild(productBody);
        productColumn.appendChild(productCard);

        return productColumn;
    }

function crearBoton(func){
    const botonCompra = document.createElement("button");
    botonCompra.classList.add("btn", "btn-success", "btn-sm", "ml-3");
    botonCompra.innerHTML = `${botonCompra.innerHTML} Add`;
    botonCompra.addEventListener("click", func);
    return botonCompra
}
    
