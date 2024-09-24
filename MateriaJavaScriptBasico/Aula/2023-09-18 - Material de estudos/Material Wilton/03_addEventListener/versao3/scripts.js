btn = document.querySelector("button");

// A funcao foi colocada diretamente aqui sem o nome dela (compare com a versao 1)
function exibirMsg1() {
    alert("Clicou - primeira função");
}
function exibirMsg2() {
    alert("Clicou - segunda função");
}

//Com o addEventListener é possível chamar mais de uma função para o mesmo manipulador de eventos:
btn.addEventListener("click",exibirMsg1);
btn.addEventListener("click",exibirMsg2);

