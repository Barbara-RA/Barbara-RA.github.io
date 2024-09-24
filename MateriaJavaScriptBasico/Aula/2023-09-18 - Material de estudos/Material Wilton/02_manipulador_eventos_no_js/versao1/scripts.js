btn = document.getElementById("btnTeste")

function exibirMsg() {
    alert("Hello, World!");
}

btn.onclick = exibirMsg;

// Os parênteses na chamada da função não foram utilizados acima, pois caso contrário a função seria chamada imediatamente. Tente trocar a instrução da linha acima pelo código abaixo:
//btn.onclick = exibirMsg();
