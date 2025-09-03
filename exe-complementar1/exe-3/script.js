function gerarNumeros(tamanhoVetor, numeroMin, numeroMax) {
  // Criei uma função para gerar números, e ela precisa de 3 informações:
  // 1. Quantos números eu quero (tamanhoVetor)
  // 2. O menor valor possível para um número (numeroMin)
  // 3. O maior valor possível para um número (numeroMax)

  let numVetor = []; // lista vazia para guardar os números.

  for (let i = 0; i < tamanhoVetor; i++) {

    // Ela garante que o número vai estar entre "numeroMin" e "numeroMax".
    const numeroAleatorio = Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;

    numVetor.push(numeroAleatorio); // Adiciono o número que acabei de criar na minha lista.
  }

  return numVetor; // a função me devolve a lista de números pronta.
}

document.addEventListener("DOMContentLoaded", () => {
    // Primeiro, eu pego os elementos do HTML usando seus IDs para poder mexer neles depois.
    const btn = document.getElementById("btnGerar");
    const numerosGeradosP = document.getElementById("numerosGerados");
    const paresP = document.getElementById("pares");
    const imparesP = document.getElementById("impares");

    // Agora, eu digo para o botão "btnGerar" que, quando alguém clicar nele...
    btn.addEventListener("click", () => {
        // ... ele deve chamar a minha função "gerarNumeros".
        // Pedi 10 números, de 1 a 100.
        const numeros = gerarNumeros(10, 1, 100);
        
        // Criei duas "contagens" para saber quantos pares e ímpares eu tenho.
        let pares = 0;
        let impares = 0;

        // Agora, eu passo por cada número da minha lista "numeros" que a função me devolveu.
        for (const numero of numeros) {
            // Verifico se o número é par (se o resto da divisão por 2 é zero).
            if (numero % 2 === 0) {
                pares++; // Se for par, adiciono 1 na contagem de pares.
            } else {
                impares++; // Se não for, adiciono 1 na contagem de ímpares.
            }
        }
        
        // atualizando os textos na minha página HTML com os resultados finais.
        numerosGeradosP.textContent = `Números gerados: ${numeros.join(", ")}`;
        paresP.textContent = `Total de pares: ${pares}`;
        imparesP.textContent = `Total de ímpares: ${impares}`;
    });
});
