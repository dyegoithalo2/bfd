document.addEventListener("DOMContentLoaded", () => {

    const matriz = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];

    const resultadoDiv = document.getElementById("resultado");

    // Percorremos a matriz para encontrar os valores
    for (let i = 0; i < 4; i++) {
        //Pegamos o valor onde a linha e a coluna são iguais (i = i)
        const valor = matriz[i][i];

        //Criamos um novo parágrafo (<p>) para cada valor
        const p = document.createElement("p");
        p.textContent = valor;

        //Colocamos o parágrafo dentro da "caixa" na página
        resultadoDiv.appendChild(p);
    }
});