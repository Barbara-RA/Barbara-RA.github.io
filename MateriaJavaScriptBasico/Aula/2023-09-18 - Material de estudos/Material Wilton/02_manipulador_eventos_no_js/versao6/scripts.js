
// Uso do querySelectorAll para selecionar todos os "buttons" da página
btns = document.querySelectorAll("button")

for (i=0; i<btns.length; i++) {
    btns[i].onclick = exibirMsg;
}

function exibirMsg() {
    alert("Hello, World!");
}