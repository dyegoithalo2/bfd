document.addEventListener("DOMContentLoaded", () => {
    let soma = 0;
    let numero;

    const numerosDigitadosDiv = document.getElementById("numeros-digitados");
    const somaTotalDiv = document.getElementById("soma-total");

    //Loop para pedir números ao usuário
    do {
        numero = Number(prompt("Digite um número ou 0 para parar):"));

        //Se o número for diferente de zero, faça o seguinte:
        if (numero !== 0) {
            //Adiciona o número à soma
            soma += numero;

            //Exibe o número na página HTML
            const p = document.createElement("p");
            p.textContent = numero;
            numerosDigitadosDiv.appendChild(p);
        }
        
    } while (numero !== 0); //O loop continua enquanto o número não for zero

    //exibe a soma total na página quando o loop acabar
    somaTotalDiv.textContent = soma;
});