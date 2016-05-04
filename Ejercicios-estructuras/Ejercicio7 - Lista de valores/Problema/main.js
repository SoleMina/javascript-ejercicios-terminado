// Escribe aquí tu codigo Javascript
var n;
alert("Tienes dos listas");
//Primera lista:
var x = prompt("Ingrese el primer valor de la lista 1");
var y = prompt("Ingrese el segundo valor de la lista 2");
var k = prompt("Ingrese el tercer valor de la lista 3");
var suma1 = x + y + k;
//Segunda lista:
var a = prompt("Ingrese el primer valor de la lista 2");
var b = prompt("Ingrese el segundo valor de la lista 2");
var c = prompt("Ingrese el tercer valor de la lista 2");
var suma2 = a + b + c;

function valores() {
  if(suma1>suma2) {
    alert("Lista 1 es mayor");
  }else if(suma2>suma1){
    alert("Lista 2 es mayor");
  }
} valores();