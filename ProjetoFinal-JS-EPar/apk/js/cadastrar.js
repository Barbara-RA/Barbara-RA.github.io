window.addEventListener('load', function () {
    
  
    document.getElementById("btnCadastrar").addEventListener("click", cadastrarUsuario);

    function cadastrarUsuario() {
        var user = document.getElementById("txtUser").value;
        var pwd = document.getElementById("txtPwd").value;
        var checkPwd = document.getElementById("txtCheckPwd").value;
    
        // Validar se todos os campos foram preenchidos
        if (user == "" || pwd == "" || checkPwd == "") {
            alertWifi("Preencha todos os campos", false, 0, "", 30, "");
        } else {
            // Validar o padrão do nome de usuário
            var padraoUser = /^\w{5,20}$/i;
            if (!padraoUser.test(user)) {
                alertWifi("Nome de usuário inválido.\nInforme um usuário contendo 5 a 20 caracteres alfanuméricos", false, 0, "", 30, "");
            } else {
                // Validar o padrão da senha
                var padraoPwd = /^[A-z0-9+*/@&-]{4,12}$/;
                if (!padraoPwd.test(pwd)) {
                    alertWifi("Senha inválida.\nInforme uma senha contendo 4 a 12 caracteres alfanuméricos e/ou caracteres especiais + - * / @ &", false, 0, "", 30, "");
                } else {
                    // Se a senha e o campo de verificação são iguais, continuar com o restante do código
                    if (pwd == checkPwd) {
                        var novoUsuario = { nome: user, senha: pwd };
                        var vetUsuarios = localStorage.getItem("vetUsuarios");
                        if (!vetUsuarios) {
                            var vet = [];
                            vet.push(novoUsuario);
                            localStorage.setItem("vetUsuarios", JSON.stringify(vet));
                        } else {
                            vet = JSON.parse(vetUsuarios);
                            vet.push(novoUsuario);
                            localStorage.setItem("vetUsuarios", JSON.stringify(vet));
                        }
    
                        alertWifi("Usuário cadastrado com sucesso", false, 0, "", 30, "");
                    } else {
                        alertWifi("As senhas não coincidem", false, 0, "", 30, "");
                    }
                }
            }
        }
    }
    

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