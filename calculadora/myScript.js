// *************************************************/ EVENTOS /*************************************************************************
document.getElementById("n1").addEventListener("click",n1); //Agrego un evento que al presionar el boton "1" escriba el numero uno en la pantalla
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("s").addEventListener("click",su);
document.getElementById("r").addEventListener("click",re);
document.getElementById("m").addEventListener("click",mu);
document.getElementById("d").addEventListener("click",di);
document.getElementById("sr").addEventListener("click",showResult);
//**************************************************/ FUNCIONES /********************************************************************
function n1(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("n1").innerHTML;
    document.getElementById("result").innerHTML = current + new_number
}
function n2(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("n2").innerHTML;
    document.getElementById("result").innerHTML = current + new_number;
}
function n3(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("n3").innerHTML;
    document.getElementById("result").innerHTML = current + new_number;
}
function n4(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("n4").innerHTML;
    document.getElementById("result").innerHTML = current + new_number;
}
function n5(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("n5").innerHTML;
    document.getElementById("result").innerHTML = current + new_number;
}
function n6(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("n6").innerHTML;
    document.getElementById("result").innerHTML = current + new_number;
}
function n7(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("n7").innerHTML;
    document.getElementById("result").innerHTML = current + new_number;
}
function n8(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("n8").innerHTML;
    document.getElementById("result").innerHTML = current + new_number;
}
function n9(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("n9").innerHTML;
    document.getElementById("result").innerHTML = current + new_number;
}
function n0(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("n0").innerHTML;
    document.getElementById("result").innerHTML = current + new_number;
}
function su(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("s").innerHTML;
    document.getElementById("result").innerHTML = current + new_number;
}
function re(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("r").innerHTML;
    document.getElementById("result").innerHTML = current + new_number;
}
function mu(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("m").innerHTML;
    document.getElementById("result").innerHTML = current + new_number;
}
function di(){
    var current = document.getElementById("result").innerHTML; 
    var new_number = document.getElementById("d").innerHTML;
    document.getElementById("result").innerHTML = current + new_number;
}

function showResult(){
    var actual = document.getElementById("result").innerHTML; 
    var suma = actual.indexOf("+");
    var resta = actual.indexOf("-");
    var div = actual.indexOf("÷");
	var mult = actual.indexOf("x");

   if (suma !== -1) {
        arr = actual.split("+",2); // convierte la cadena de string en un array de substrings indicando el "separador" y la cantidad de splits
        res = parseInt(arr[0]) + parseInt(arr[1]);
        document.getElementById("result").innerHTML = res;
    } else if (resta !== -1) {
        arr = actual.split("-",2);
        res = arr[0] - arr[1];
        document.getElementById("result").innerHTML = res;
        
    } else if (div !== -1) {
        arr = actual.split("÷",2);
        res = arr[0] / arr[1];
        document.getElementById("result").innerHTML = res;
        
    } else if (mult !== -1) {
        arr = actual.split("x",2);
        res = arr[0] * arr[1];
        document.getElementById("result").innerHTML = res;
        
    }
}

