let valor1 = document.querySelector("#valor1").value;
let valor2 = document.querySelector("#valor2").value;
let resultado = document.querySelector("#resultado");

let btnSuma = document.querySelector("#suma");
let btnResta = document.querySelector("#resta");
let btnMultiplicar = document.querySelector("#multiplicacion");
let btnDividir = document.querySelector("#division");


btnSuma.addEventListener("click",suma)


function suma (){
    let v1 = valor1.value;
    let v2 = valor2.value;
    let suma = v1+v2;
    resultado.innerHTML = suma;
}