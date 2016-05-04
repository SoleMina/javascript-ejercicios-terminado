// Escribe aquí tu codigo Javascript
// Escribe aquí tu codigo Javascript

var cont=0;
var contf=0;
var contm=0;
var contme=0;
 do{
 dni=parseInt(prompt('Ingresar numero de documento:(para finalizar el programa ingresar 0)'));
 if(dni===0) console.log('El programa ha terminado')
 else{
 edad=parseInt(prompt('Ingresar edad:'));
 sexo=prompt('Sexo:(F) o (M)');
 switch (sexo) {
     case 'F':
         contf++;
         break;
    case 'M':
    if(edad>16 && edad<65){
        contme++;
    }
        contm++;
        break;
 }
cont++;}
 }while(dni!=0)
console.log('Cantidad de personas censadas:'+cont+'\n Cantidad de varones:'+contm+'\n Cantidad de mujeres:'+contf+'\n Cantidad de varones cuya edad varía entre 16 y 65 años:'+contme);