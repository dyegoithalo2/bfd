function Adicionar(){
    let numeros = [];

    const numero1 = document.getElementById("n1").value;
    numeros.push(numero1);

    const numero2 = document.getElementById("n2").value;
    numeros.push(numero2);

    const numero3 = document.getElementById("n3").value;
    numeros.push(numero3);

    const numero4 = document.getElementById("n4").value;
    numeros.push(numero4);

    const numero5 = document.getElementById("n5").value;
    numeros.push(numero5);

    let maiorNum = Math.max(...numeros);

    let menorNum = Math.min(...numeros);

    let menorN = document.getElementById("menor");
    let maiorN = document.getElementById("maior");

    menorN.innerHTML = `meu menor número: ${menorNum}`;
    maiorN.innerHTML = `meu maior número: ${maiorNum}`;

}
