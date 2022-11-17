const formulario = document.querySelector("form");
function formularioEnviado(resposta) {
    if(resposta.ok) {
        formulario.innerHTML = "<p class='font-2-l' style='text-align: center; grid-column: 1/-1; margin: 0; padding: 10px 20px 0 20px; background: #317A00; color: #ffffff;'> Mensagem enviada com SUCESSO!</p><p class='font-2-l' style='text-align: center; grid-column: 1/-1; margin: 0; padding: 0 20px 60px 20px; background: #f7f7f7'> Aguarde nosso contato. Voltar à <a style='margin: 0 auto; display: block;' class='botao' href='./'>Página Inicial</a></p>"
    } else {
        formulario.innerHTML = "<p class='font-2-l' style='text-align: center; grid-column: 1/-1; margin: 0; padding: 60px 20px 0 20px; background: #E00000; color: #ffffff;';>Ops... Houve um erro!</p> <p class='font-2-l' style='text-align: center; grid-column: 1/-1; margin: 0; padding: 0 20px 60px 20px; background: #f7f7f7/'>Favor nos enviar uma mensagem de e-mail para contato@renatoaraujo.fun</p>"
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