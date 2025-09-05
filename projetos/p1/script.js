document.addEventListener("DOMContentLoaded", () =>{
  const nomeInput = document.getElementById("nome");
  const notaN1 = document.getElementById("n1");
  const notaN2 = document.getElementById("n2");
  const notaN3 = document.getElementById("n3");
  const btnCalcular = document.getElementById("btnCalcular");
  const tabela = document.querySelector("#tabelaNotas tbody");


  btnCalcular.addEventListener("click", () =>{
    const nome = nomeInput.value;
    const n1 = parseFloat(notaN1.value); //parseFloat converte string para um número float, que é o ideal para notas já que podem ser 9.5
    const n2 = parseFloat(notaN2.value);
    const n3 = parseFloat(notaN3.value);

    if (nome.trim() === "" || isNaN(n1) || isNaN(n2) || isNaN(n3)) { //trim remove os espaços antes e depois, validação para saber se é um número
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    };

    //verifica se as notas são menores que 0 ou maior que 10
    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10) {
      alert("As notas devem ser de 0 a 10.");
      return;
    };

    const media = ((n1 + n2 + n3) / 3).toFixed(2); //calcula a média

    //função para ver se o aluno foi aprovado, reprovado ou está em recuperação.
    function resultadoMedia(media) {
        if (media >= 7) {
            return "Aprovado";
        } else if (media >= 5 && media < 7) {
            return "Recuperação";
        } else {
            return "Reprovado";
        }
    }

    //armazena o resultado da função acima
    const resultado = resultadoMedia(media);

    //cria uma nova linha
    const novaLinha = document.createElement("tr");

    //preenche
    novaLinha.innerHTML = `
      <td>${nome}</td>
      <td>${n1}</td>
      <td>${n2}</td>
      <td>${n3}</td>
      <td>${media}</td>
      <td>${resultado}</td>
    `;

    //adiciona uma nova linha na tabela
    tabela.appendChild(novaLinha);

    //limpando as inputs recebidos pelo usuário
    nomeInput.value = "";
    notaN1.value = "";
    notaN2.value = "";
    notaN3.value = "";
  });
});

