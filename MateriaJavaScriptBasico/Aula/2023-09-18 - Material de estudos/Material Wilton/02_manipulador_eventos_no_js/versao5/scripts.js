
// Uso do querySelector ao invés de getElementById. Note que o atributo id foi removido do botão no código HTML
btn = document.querySelector("button")

btn.onclick = function () {
    alert("Hello, World!");
}

