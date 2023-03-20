let valor1 = document.querySelector("#valor1")
let valor2 = document.querySelector("#valor2")
let resultado = document.querySelector("#resultado");

let btnSuma = document.querySelector("#sumar");
let btnResta = document.querySelector("#restar");
let btnMultiplicar = document.querySelector("#multiplicar");
let btnDividir = document.querySelector("#dividir");


btnSuma.addEventListener("click",sumacion)

function sumacion (){
    let v1 = valor1.value;
    let v2 = valor2.value;
    let suma = Number(v1)+Number(v2);
    resultado.innerHTML = suma;
}

btnResta.addEventListener("click",restacion)
function restacion (){
    let v1 = valor1.value;
    let v2 = valor2.value;
    let resta = v1-v2;
    resultado.innerHTML = resta;
}

btnDividir.addEventListener("click",dividicion)
function dividicion (){
    let v1 = valor1.value;
    let v2 = valor2.value;
    let resta = v1/v2;
    resultado.innerHTML = resta;
}

btnMultiplicar.addEventListener("click",multiplicacion)
function multiplicacion (){
    let v1 = valor1.value;
    let v2 = valor2.value;
    let resta = v1*v2;
    resultado.innerHTML = resta;
}