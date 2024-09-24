alert("Olá, seja bem-vindo!");

// acessando os elementos HTML
var nomeUsuarioInput = document.getElementById("nomeUsuario");
var botaoEntrar = document.getElementById("botaoEntrar");

botaoEntrar.addEventListener("click", function () {
    var nomeCompleto = nomeUsuarioInput.value.trim();

    // Verifica se o campo não está vazio
    if (nomeCompleto === "") {
        alert("Por favor, preencha o campo 'Nome Completo'.");
    } else {
        // Divide o nome em palavras separadas por espaço
        var palavras = nomeCompleto.split(" ");

        // Verifica se existem pelo menos duas palavras
        if (palavras.length >= 2) {
            alert("Validação bem-sucedida! Você pode prosseguir.");
            
            // Redireciona para a página "menu.html" com o nome de usuário como parâmetro de consulta
            window.location.href = "menu.html?nome=" + encodeURIComponent(nomeCompleto);
        } else {
            alert("O campo 'Nome Completo' deve conter pelo menos duas palavras (Nome + Sobrenome).");
        }
    }
});

