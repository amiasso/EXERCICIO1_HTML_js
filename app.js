
const form = document.getElementById('comparar');

function validar(numeroA){
    var numero = comparar.numeroA.value;
    var repetirNumero = comparar.numeroB.value;

    if(numero === "" ||repetirNumero <= 5){
        alert("coloque um numero maior que 5");
    comparar.repetirNumero.focus();
    return false;
    }else {
        alert("seu numero é valido");
    }
    
}
    
    



