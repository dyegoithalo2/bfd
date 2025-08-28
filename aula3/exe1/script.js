const soma = (a,b) => a + b;
const subtrair = (a,b) => a - b;
const multiplicar = (a,b) => a * b;
const dividir(a,b) {return b === 0 ? "divisão por zero!" : a / b;}

document.addEventListener("DOMContentLoaded", () => {
    const A = document.getElementById("a");
    const B = document.getElementById("b");
    const btn = document.getElementById("btnCalc");

    const outSoma = document.getElementById("soma");
    const outSub = document.getElementById("sub");
    const outMul = document.getElementById("mul");
    const outDivi = document.getElementById("divi");

    btn.addEventListener("click", () => {
        let a = Number(A.value);
        let b = Number(B.value);
        
        if (isNaN(a) || isNaN(bb)) {
            alert("Digite dois números válidos");
            return;
        }

        document.getElementById("soma").textContent = num1 + num2;
        document.getElementById("subtracao").textContent = num1 - num2;
        document.getElementById("multiplicacao").textContent = num1 * num2;
        document.getElementById("divisao").textContent = num2 !== 0 ? (num1/num2).toFixed(2) : "Divisão por zero";
        document.getElementById("resto").textContent = num2 !== 0 ? num1 % num2 : "Não aplicável";

    });

});