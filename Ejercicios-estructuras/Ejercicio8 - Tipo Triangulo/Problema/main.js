// Escribe aquí tu codigo Javascript
alert("Identificar el tipo de triángulo");

var n;
var n = prompt("Indicar la longitud del primer lado");
var x = prompt("Indicar la longitud del segundo lado");
var y = prompt("Indicar la longitud del tercer lado");

function triangulo() {
    if(n==x && n==y) {
        alert("El triángulo es equilatero");
    } else if(n==x || n==y) {
        alert("El triángulo es isosceles");
    } else if(n!=x && n!=y) {
        alert("El triángulo es escaleno");
    }else if(n==45) {
        alert("El triángulo es rectangulo");
    }else {
        alert("No es un triangulo");
    }
} triangulo();