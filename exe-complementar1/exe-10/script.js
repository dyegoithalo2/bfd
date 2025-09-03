document.addEventListener("DOMContentLoaded", () => {
    // Seleciona os elementos de input, botão e o div de resultado do HTML
    const numeroInput = document.getElementById("numeroInput");
    const botaoGerar = document.getElementById("gerarBotao");
    const resultadoDiv = document.getElementById("tabuada-resultado");

    botaoGerar.addEventListener("click", () => {
        // Converte o valor do input para um número
        const numero = Number(numeroInput.value);
        
        // Limpa o conteúdo anterior da div de resultados
        resultadoDiv.innerHTML = "";

        // Verifica se a entrada é um número válido.
        if (isNaN(numero) || numeroInput.value.trim() === "") {
            resultadoDiv.innerHTML = "Digite um número válido!";
            return;
        }

        // Gera a tabuada de 1 a 10 e adiciona cada linha ao HTML
        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i;
            const linha = document.createElement("p");
            linha.textContent = `${numero} x ${i} = ${resultado}`;
            resultadoDiv.appendChild(linha);
        }
    });
});