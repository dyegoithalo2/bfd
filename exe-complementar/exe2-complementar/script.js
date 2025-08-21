document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnVerificar");
    const resultadoP = document.getElementById("resultado");

    btn.addEventListener("click", () =>{
        let temLogin = document.getElementById("login").checked;
        let temSenha = document.getElementById("senha").checked;

        if (temLogin == true && temSenha == true){
            resultadoP.textContent = "Acesso liberado";
            resultadoP.className = "verde";
        } else {
            resultadoP.textContent = "Acesso negado";
            resultadoP.className = "vermelho";
        }
    });
});