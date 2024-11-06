window.addEventListener("load", function () {
    document.getElementById("btnEntrar").addEventListener("click", verificarLogin);

    function verificarLogin() {
        var user = document.getElementById("txtUser").value;
        var pwd = document.getElementById("txtPwd").value;
        var vetUsuarios;

        if (user == "" || pwd == "") {
            alertWifi("Preencha todas as informações", false, 0, "", 30, "");
        } else {
            vetUsuarios = JSON.parse(localStorage.getItem("vetUsuarios"));

            var achou = false;
            if (!vetUsuarios) {
                alertWifi("Não há usuário cadastrado", false, 0, "", 30, "");
            } else {
                for (i = 0; i < vetUsuarios.length; i++) {
                    if (vetUsuarios[i].nome == user && vetUsuarios[i].senha == pwd) {
                        achou = true;
                        break;
                    }
                };

                if (achou == true) {
                    window.location.href = "jogo.html";
                } else {
                    alertWifi("Senha ou usuário incorreto(os).", false, 0, "", 30, "");
                };
            };
        };
    };


    document.getElementById('alteraEstilo').addEventListener("click", alteraEstilo);

    function obterEstiloAtual() {
        var estilo = localStorage.getItem("estilo");

        if (estilo === null) {
            // Se "estilo" não existe, cria com o valor inicial 1
            estilo = 1;
            localStorage.setItem("estilo", estilo);
        } else {
            estilo = parseInt(estilo); // Converte para número, se necessário
        }

        return estilo;
    }

    // Função para alterar o estilo quando o usuário clicar em Alterar Tema
    function alteraEstilo() {
        var estiloAtual = obterEstiloAtual();

        if (estiloAtual === 1) {
            // Altera para o estilo layoutKids.css
            document.getElementById("estiloAtual").href = "css/layoutKids.css";
        } else {
            // Altera para o estilo padrão (layout.css)
            document.getElementById("estiloAtual").href = "css/layout.css";
        }

        // Troca o valor no localStorage
        localStorage.setItem("estilo", 3 - estiloAtual); // Inverte entre 1 e 2
    }

    // Adiciona o evento de clique ao botão Alterar Tema
    document.getElementById('alteraEstilo').addEventListener("click", alteraEstilo);

    // Chama a função para definir o estilo inicial ao carregar a página
    var estiloInicial = obterEstiloAtual();
    if (estiloInicial === 2) {
        // Se o estilo inicial for 2, altera para o estilo layoutKids.css
        document.getElementById("estiloAtual").href = "css/layoutKids.css";
    }


});