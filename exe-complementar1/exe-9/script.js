document.addEventListener("DOMContentLoaded", () => {
    // Esta é a função que recebe um vetor de notas e retorna a média.
    function calcularMedia(notas) {
        // Verifica se o vetor de notas está vazio.
        if (notas.length === 0) {
            return 0;
        }

        // Soma todas as notas no vetor.
        let soma = 0;
        for (let i = 0; i < notas.length; i++) {
            soma += notas[i];
        }

        // Retorna a média.
        return soma / notas.length;
    }

    // Vetores de notas para 3 alunos diferentes.
    const notasAluno1 = [7, 8, 9];
    const notasAluno2 = [5, 6, 4];
    const notasAluno3 = [10, 9, 10];

    // Encontra a área do HTML onde os resultados serão exibidos.
    const resultadosDiv = document.getElementById("resultados");

    // Array com as notas de todos os alunos
    const todosAlunos = [
        { nome: "Aluno 1", notas: notasAluno1 },
        { nome: "Aluno 2", notas: notasAluno2 },
        { nome: "Aluno 3", notas: notasAluno3 }
    ];

    // Itera sobre o array de alunos e calcula a média para cada um
    todosAlunos.forEach(aluno => {
        const media = calcularMedia(aluno.notas);
        
        // Cria um parágrafo para exibir o resultado.
        const p = document.createElement("p");
        p.textContent = `A média do ${aluno.nome} é: ${media.toFixed(2)}`;
        resultadosDiv.appendChild(p);
    });
});