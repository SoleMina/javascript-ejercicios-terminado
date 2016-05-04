// Escribe aquí tu codigo Javascript
var n;
n = Number(prompt("Ingrese el primer número"));
x = Number(prompt("Ingrese el segundo número"));

if(n>x) {
	a = n + x;
	b = n - x;
	alert("La suma de los dos números es: "+a+"  "+"La resta de los dos números es: "+b);
} else if(n == x) {
	alert("Ambos números son iguales");

} else{
	z = n*x;
	alert("El producto de ambos números es: "+z);
}


