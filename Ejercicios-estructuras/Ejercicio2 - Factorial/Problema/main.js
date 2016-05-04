// Escribe aquí tu codigo Javascript
function factorial(){
    a=Number(prompt('Hallar factorial de:'));
    producto=1;
        for(var i=a;i>0;i--){
            console.log(i+'x ');
            producto*=i;
        }
}factorial();
document.write(+a+'!='+producto);


