// Escribe aquí tu codigo Javascript
var valores = [true, 5, false, "hola", "adios", 2];
var mayor;

for (var i = 0; i < valores.length; i++) {

    if(valores[i] > valores[i+1]) mayor=valores[i]
    else mayor=valores[i+1];
}
alert("el mayor es: " +mayor);


