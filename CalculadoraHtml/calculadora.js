const operando1 = document.getElementById("op1");
const operando2 = document.getElementById("op2");
const resultado = document.getElementById("resultado");
const btnSuma = document.getElementById("+");
const btnResta = document.getElementById("-");
const btnMulti = document.getElementById("x");
const btnDivi = document.getElementById("/");
btnSuma.addEventListener("click", suma)
btnResta.addEventListener("click", resta)
btnMulti.addEventListener("click", multi)
btnDivi.addEventListener("click", divi)

function suma(){
    const ope1= parseFloat(operando1.value);
    const ope2 = parseFloat(operando2.value);
    if(!isNaN(ope1) && !isNaN(ope2)){
        let resultadoOper;
        resultadoOper= ope1+ope2;
        resultado.innerText = "Resultado = "+resultadoOper;
    }
    else
    resultado.innerText ="Introduce numeros carajo!"
}
function resta(){
    const ope1= parseFloat(operando1.value);
    const ope2 = parseFloat(operando2.value);
    if(!isNaN(ope1) && !isNaN(ope2)){
        let resultadoOper;
        resultadoOper= ope1-ope2;
        resultado.innerText = "Resultado = "+resultadoOper;
    }
    else
    resultado.innerText ="Introduce numeros carajo!"
}
function multi(){
    const ope1= parseFloat(operando1.value);
    const ope2 = parseFloat(operando2.value);
    if(!isNaN(ope1) && !isNaN(ope2)){
        let resultadoOper;
        resultadoOper= ope1*ope2;
        resultado.innerText = "Resultado = "+resultadoOper;
    }else
    resultado.innerText ="Introduce numeros carajo!"
}
function divi(){
    const ope1= parseFloat(operando1.value);
    const ope2 = parseFloat(operando2.value);
    if(!isNaN(ope1) && !isNaN(ope2)){
        let resultadoOper;
        resultadoOper= ope1/ope2;
        resultado.innerText = "Resultado = "+resultadoOper;
    }else
    resultado.innerText ="Introduce numeros carajo!"
}