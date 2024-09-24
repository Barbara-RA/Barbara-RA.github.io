btn = document.querySelector("button");

function exibirMsg(msg) {
    alert(msg);
}

btn.addEventListener("click", function () {exibirMsg('Clicou')});
btn.addEventListener("mouseover", function () {exibirMsg('Passou o mouse!')});
btn.addEventListener("mouseout", function () {exibirMsg('Retirou o mouse!')});

