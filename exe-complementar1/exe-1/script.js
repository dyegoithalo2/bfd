let numeros = [7,8,9,10,5];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

const resultadoSoma = document.getElementById("rSoma");

resultadoSoma.textContent = `A soma dos números é: ${soma}`;