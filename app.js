
const btn = document.querySelector("#send");

btn.addEventListener("click",function(e){
    e.preventDefault();

    const name =document.querySelector("#numeroA");

    const value = name.value;
    var numberA =parseInt(value);

    const nameB =document.querySelector("#numeroB");

    const valueB = nameB.value;
    var numberB = parseInt(valueB);

    if(numberA >= numberB ){
        alert('No campo "A" o numero tem que ser menor que o do campo "B" ');
}else if(numberB <= numberA){
    alert('No campo "B" o numero tem que ser maior que o do campo "A" ');
}else{
    alert('numero valido!!!');
}
})