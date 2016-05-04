// Escribe aquí tu codigo Javascript
var n;
var resultado;
var n = Number(prompt("Ingre el número del dni"));
y = n % 23;

function dni() {

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
alert("La letra del dni es: "+letras[y]);
} dni()
if(n<0 || n>999999) {
	alert("El número proporcionado no es válido");
}