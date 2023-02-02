const operando1 = document.getElementById("op1");
const operando2 = document.getElementById("op2");
const resultado = document.getElementById("resultado");
const btnSuma = document.getElementById("+");
const btnResta = document.getElementById("-");
const btnMulti = document.getElementById("x");
const btnDivi = document.getElementById("/");
btnSuma.addEventListener("click", function(){operacion(btnSuma.value)})
btnResta.addEventListener("click",  function(){operacion(btnResta.value)})
btnMulti.addEventListener("click", function(){operacion(btnMulti.value)})
btnDivi.addEventListener("click", function(){operacion(btnDivi.value)})
function operacion(signo){
    const ope1= parseFloat(operando1.value);
    const ope2 = parseFloat(operando2.value);
    if(!isNaN(ope1) && !isNaN(ope2)){
        let resultadoOper;
        switch(signo){
            case "+":
                resultadoOper= ope1+ope2;
                break;
            case "-":
                resultadoOper= ope1-ope2;
                break;
            case "x":
                resultadoOper= ope1*ope2;
                break;
            case "/":
                resultadoOper= ope1/ope2;
                break;
        }
        resultado.innerText = "Resultado = "+resultadoOper;
    }else
    resultado.innerText ="Introduce numeros carajo!";
}