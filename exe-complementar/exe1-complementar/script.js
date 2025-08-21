document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnCalcular");
    const mediaSpan = document.getElementById("media");
    const situacaoSpan = document.getElementById("situacao");

    btn.addEventListener("click", () => {
        let num1 = Number(document.getElementById("n1").value);
        let num2 = Number(document.getElementById("n2").value);
        let num3 = Number(document.getElementById("n3").value);

        if(isNaN(num1)|| isNaN(num2) || isNaN(num3) || num1 < 0 || num2 < 0 || num3 < 0){
            alert("Digite três notas válidas e positivas!")
            return;
        }

        let media = (num1 + num2 + num3)/3;
        mediaSpan.textContent = media.toFixed(2);
        
        let situacao = "";
        if(media >= 7){
            situacao = "Aprovado(a).";
        } else if (media < 7 && media >= 5) {
            situacao = "Recuperação.";
        } else {
            situacao = "Reprovado.";
        }

        situacaoSpan.textContent = situacao;
    });

});