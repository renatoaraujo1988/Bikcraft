const formulario = document.querySelector("form");
function formularioEnviado(resposta) {
    if(resposta.ok) {
        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 100px; border-radius: 5px; background: #f7f7f7;'><span style='color: #317A00 ;'>Mensagem enviada com SUCESSO!</span> Aguarde nosso contato. Voltar à <a class='botao' href='./'>Página Inicial</a></p>"
    } else {
        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 100px; border-radius: 5px; background:#f7f7f7;><span style='color: #E00000 ;'>Ops... Houve um erro!</span> Favor nos enviar uma mensagem de e-mail para contato@renatoaraujo.fun</p>"
    }
}
function enviarFormulario(event) {
    event.preventDefault();
    const botao = document.querySelector("form button");
    botao.disabled = true;
    botao.innerText = "Enviando..."
    const data = new FormData(formulario);
    fetch("./enviar.php", {
        method: "POST",
        body: data,
    }).then(formularioEnviado);
}
formulario.addEventListener("submit", enviarFormulario);