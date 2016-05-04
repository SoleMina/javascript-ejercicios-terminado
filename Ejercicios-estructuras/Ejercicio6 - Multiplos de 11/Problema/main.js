// Escribe aquí tu codigo Javascript
var suma=0;

for(i=0; i<3000; i++) {

    if(i%11===0){
        console.log(i);
        suma+=i;
    }
}
document.write("La suma de los múltiplos de 11 es: "+suma);


