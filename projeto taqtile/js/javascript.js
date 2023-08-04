document
    .querySelector("#Sobre-mim")
    .addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector("#sobre-mim-titulo").scrollIntoView();
    });

document.querySelector("#Contato").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#contato-titulo").scrollIntoView();
});

document.querySelector("#Projeto").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#projeto-titulo").scrollIntoView();
});
