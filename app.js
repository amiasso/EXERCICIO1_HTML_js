
const form = document.getElementById('comparar');

function validar(){
var valida = parseInt(validar)
var numero = comparar.numeroA.value;
var repetirNumero = comparar.numeroB.value;

if(numero > 5){
    alert(" No campo A, coloque um numero menor ou igual a 5");
        comparar.repetirNumero.focus();
}else if(repetirNumero > 10){
    alert("No campo B, digite um numero entre 5 e 10");
}else{
    alert("seu numero é valido");
}
}
    
    



