btn = document.querySelector("button");

// A funcao foi colocada diretamente aqui sem o nome dela (compare com a versao 1)
function exibirMsg1() {
    alert("Clicou");
}
function exibirMsg2() {
    alert("Passou o mouse");
}
function exibirMsg3() {
    alert("Retirou o mouse");
}

btn.addEventListener("click",exibirMsg1);
btn.addEventListener("mouseover",exibirMsg2);
btn.addEventListener("mouseout",exibirMsg3);

