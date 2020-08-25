class Product{
    constructor(sku,nameProd){
        this.nameProd = nameProd;
        this.sku = sku;
    }
    set sku(sku){
        this._sku = sku;
    }
    
    get sku(){
        return this._sku;
    }
    
    get nameProd(){
        return this._nameProd;
    }
    set nameProd(nameProd){
        this._nameProd = nameProd;
    }
}
var product1 = new Product(10,"Papel");
var product2 = new Product(15,"Piedra");
var product3 = new Product(20,"Tijera");

var productList = new Array(product1,product2,product3);
// Obtengo el elemento del tbody
const $body = document.querySelector("tbody");
// Recorrer todos los productos
productList.forEach(product => {
    addProductsElementsToDom(product.sku,product.nameProd);
})

function addProductsElementsToDom(sku,nameProd){
    const $tr = document.createElement("tr");
    $tr.setAttribute("id","tr"+sku); //le agrego el atributo id con el sku para poder identificarlo al eliminar
    // Creamos el <td> de sku
    let $tdSku = document.createElement("td");
    $tdSku.textContent = sku; // el textContent del td es el sku
    //y lo adjuntamos a tr
    $tr.appendChild($tdSku);
    // Creamos el <td> de nameProd
    let $tdName = document.createElement("td");
    $tdName.textContent = nameProd; 
    $tr.appendChild($tdName);
    //agrago un boton para eliminar
    let $tdButton = document.createElement("td"); 
    let $button = document.createElement("a");
    let $i = document.createElement("i");
    $i.setAttribute("class","far fa-trash-alt");
    $button.setAttribute("class","btn btn-danger");
    $button.setAttribute("onclick","deleteProduct("+sku+")"); //le paso por parametro el nro de sku que le corresponde
    $button.appendChild($i);
    $tdButton.appendChild($button);
    $tr.appendChild($tdButton);
    // Finalmente agregamos el <tr> al cuerpo de la tabla
    $body.appendChild($tr);
}

function deleteProduct(sku){
    productList.forEach(product => {
        if(product.sku == sku){
            var $toDelete = document.getElementById("tr"+product.sku);
            $body.removeChild($toDelete);
            var index = productList.indexOf(product);
            productList.splice(index,1);
        }
    })
}
function exists(sku){
    var rta = false;
    productList.forEach(product => {
        if(product.sku == sku){
            rta = true;
        }});
        return rta;
}
function addProduct(){
    var newSku = document.getElementById("ctrl-sku");
    var newName = document.getElementById("ctrl-name");
    if(!exists(newSku.value)){
        var newProduct = new Product(newSku.value,newName.value);
        productList.push(newProduct);
        addProductsElementsToDom(newSku.value,newName.value);
    }else{
        alert("Ya existe un producto con el mismo Sku!");
    }
    
}