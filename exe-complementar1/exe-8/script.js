function soma(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Divisão por zero!";
  }
  return a / b;
}

function resto(a, b) {
  if (b === 0) {
    return "Não aplicável";
  }
  return a % b;
}

document.addEventListener("DOMContentLoaded", () => {
    // Selecionando os elementos de input, botão e saídas do HTML.
    const A = document.getElementById("num1");
    const B = document.getElementById("num2");
    const btn = document.getElementById("btnCalcular");

    const outSoma = document.getElementById("soma");
    const outSub = document.getElementById("subtracao");
    const outMul = document.getElementById("multiplicacao");
    const outDivi = document.getElementById("divisao");
    const outResto = document.getElementById("resto");

    btn.addEventListener("click", () => {
        // Convertendo os valores de texto dos inputs para números.
        let a = Number(A.value);
        let b = Number(B.value);
        

        if (isNaN(a) || isNaN(b)) {
            alert("Digite dois números válidos");
            return;
        }

        outSoma.textContent = soma(a, b);
        outSub.textContent = subtrair(a, b);
        outMul.textContent = multiplicar(a, b);
        outDivi.textContent = dividir(a, b).toFixed(2);
        outResto.textContent = resto(a, b);
    });
});