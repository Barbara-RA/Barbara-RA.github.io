
btn = document.querySelector("button")

function exibirMsg1() {
    alert("Hello, World! - Primeira função");
}
function exibirMsg2() {
    alert("Hello, World! - Segunda função");
}
function main() {
    exibirMsg1();
    exibirMsg2();
}

// Essa seria uma possível solução para executar ambas as funções: "exibirMsg1" e "exibirMsg2" 
btn.onclick = main;