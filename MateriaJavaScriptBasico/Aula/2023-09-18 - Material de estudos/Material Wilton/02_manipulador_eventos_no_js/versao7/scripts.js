
btn = document.querySelector("button")

function exibirMsg1() {
    alert("Hello, World! - Primeira função");
}
function exibirMsg2() {
    alert("Hello, World! - Segunda função");
}

// Na execução abaixo a chamada da função "exibirMsg2" iria sobrepor a chamada da função "exibirMsg1"
btn.onclick = exibirMsg1;
btn.onclick = exibirMsg2;