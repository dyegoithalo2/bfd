document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnComparar");
    const maiorN = document.getElementById("maior");
    const menorN = document.getElementById("menor");
    const igualN = document.getElementById("igual");

    btn.addEventListener("click", () => {
        let num1 = Number(document.getElementById("n1").value);
        let num2 = Number(document.getElementById("n2").value);
        let num3 = Number(document.getElementById("n3").value);

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
            alert("Por favor, insira três números válidos.");
            return;
        }

        if (num1 > num2 && num1 > num3){
            maiorN.innerHTML = `Maior número: ${num1}`;
        } else if (num2 > num1 && num2 > num3){
            maiorN.innerHTML = `Maior número: ${num2}`;
        }else {
            maiorN.innerHTML = `Maior número: ${num3}`;
        }

        if(num1 < num2 && num1 < num3){
            menorN.innerHTML = `Menor número: ${num1}`;
        }else if (num2 < num1 && num2 < num3){
            menorN.innerHTML = `Menor número: ${num2}`;
        }else{
            menorN.innerHTML = `Menor número: ${num3}`;
        }

        if(num1 === num2 && num1 === num3){
            igualN.innerHTML =`Todos os números são iguais!`;
        }else if (num1 === num2){
            igualN.innerHTML = `O número um ${num1} é igual ao número dois ${num2}`;
        }else if (num1 === num3){
            igualN.innerHTML = `O número um ${num1} é igual ao número três ${num3}`;  
        }else if (num2 === num3){
            igualN.innerHTML = `O número dois ${num2} é igual ao número três ${num3}`;
        }else{
            igualN.innerHTML = `Nenhum número é igual ${num1}, ${num2}, ${num3}`;
        }
    });
});