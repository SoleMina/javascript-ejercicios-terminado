// Escribe aquí tu codigo Javascript
var x=[];

var sumatoria=0;

for (var i = 1; i <=10; i++) {
    x[i]=[];
    x[i] =Number(prompt("Ingrese un numero"+i+":"));
    sumatoria+=x[i];
}

alert("la suma de los 10 numeros es: "+sumatoria);

