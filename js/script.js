// const botao = document.querySelector(".ativar");

// function mostrar() {
//     const galeria = document.querySelector(".bicicletas-lista");
//     galeria.classList.toggle("mostrar");

// }

// botao.addEventListener("click", mostrar);


const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
        link.classList.add("ativo")
    }
}

links.forEach(ativarLink);