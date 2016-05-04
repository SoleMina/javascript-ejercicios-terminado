// Escribe aquí tu codigo Javascript
// Escribe aquí tu codigo Javascript
var n;
var n = prompt("Escribe una de estás palabras que quiera traducir: casa, mesa, perro, gato.");
alert(traducir(n));
function traducir(n){

    switch(n) {
        case "casa":
            return "house";
            break;
        case "mesa":
            return "table";
            break;
        case "perro":
            return "dog";
            break;
        case "gato":
            return "cat";
            break;

} 

}
