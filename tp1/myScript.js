document.getElementById("ctrl-nombre").onkeyup = myFunction;
//document.getElementById("ctrl-nombre").onkeypress = checkLength;
//document.getElementById("ctrl-nombre").addEventListener("keypress",myFunction);

function myFunction(){
    var str = document.getElementById("ctrl-nombre");
    //console.log(str.value); 
    var myRe = new RegExp("^[a-zñ A-ZÑ0-9]+$");
    var ok = myRe.test(str.value);
    console.log(ok);
    if (!ok) {
        var rta = str.value;
        document.getElementById("ctrl-nombre").value = rta.slice(0, rta.length-1);
        window.alert("No se permiten caracteres especiales!");     
    }
}
function checkLength(param){
    if(param.value.length > 20){
        alert("El maximo permitido son 20 caracteres.");
        var value = param.value;
        param.value = value.slice(0, value.length-1);
    }
}

