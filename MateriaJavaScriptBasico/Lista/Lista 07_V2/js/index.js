// função mais otimizada
window.addEventListener("load", function(){
    alert("Olá, seja bem-vindo!");
});

// outra opção 
// window.addEventListener("load", mostrarMsg);
// function mostrarMsg(){
//     alert("Olá, seja bem-vindo!");
// }

document.getElementById("btnEntrar").addEventListener("click", function() {
    nome = document.getElementById("txtNome").value; // Pegue o valor do campo de entrada
    if (nome === "") {
        alert("Nome inválido. Favor inserir um nome");
    } else {
        vetPalavras = nome.split(" ");
        if (vetPalavras.length > 1) {
            nomeSobrenome = `${vetPalavras[0]} ${vetPalavras[vetPalavras.length - 1]}`;
            localStorage.setItem("nome",nomeSobrenome); //armazenando variavel na chave nome
            window.open("menu.html","_self"); //para abrir um novo link na mesma guia
            // window.open("menu.html","_blank"); para abrir em uma nova página

        } else {
            alert("Nome inválido.\n Favor inserir seu Nome e SOBRENOME separados por espaço");
        }
    }
});
