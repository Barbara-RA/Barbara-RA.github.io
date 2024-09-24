window.addEventListener("load", function () {

    // 2° verificando qual foi o nível selecionado
    document.getElementById("nivel").value = "selecione";
    document.getElementById("tempo").textContent = "00:00";

    document.getElementById("nivel").addEventListener("change", function () {
        selecao = this.value;
        if (selecao == "facil") {
            document.getElementById("tempo").textContent = "01:45";
        } else if (selecao == "medio") {
            document.getElementById("tempo").textContent = "01:15";
        } else if (selecao == "dificil") {
            document.getElementById("tempo").textContent = "00:30";
        }
    });

    // 3° botão de iniciar
    document.getElementById("numero").innerHTML = "-";
    document.getElementById("iniciar").addEventListener("click", iniciarExibicao);

    var cronometroNroAleatorio;
    var paresSorteados = 0;
    var erros = 0;
    var acertos = 0;
    var percentual = 0;
    document.getElementById("sorteados").innerHTML = paresSorteados;
    document.getElementById("acertos").innerHTML = acertos;
    document.getElementById("erros").innerHTML = erros;
    document.getElementById("percentual").innerHTML = percentual;


    function iniciarExibicao() {
        var selecao = document.getElementById("nivel").value;
        if (tempoRestante === 0) {
            iniciarTempo();
        }
        if (selecao === "selecione") {
            alert("Por favor, escolha um nível antes de iniciar.");
        } else {
            controlarBtns(true, false);
            cronometroNroAleatorio = setInterval(numeroAleatorio, 1000);
        }
    }

    function numeroAleatorio() {
        var numeroSorteado = Math.floor(Math.random() * 100) + 1
        document.getElementById("numero").innerHTML = numeroSorteado;
        document.getElementById("numero").classList.remove("erro");
        document.getElementById("numero").classList.remove("acerto");

        // 5° incrementando erros e acertos e contagem de números sorteados pares
        if ((numeroSorteado % 2) == 0) {
            paresSorteados++;
            document.getElementById("sorteados").innerHTML = paresSorteados;
        }
    };


    document.getElementById("numero").addEventListener("click", function (numeroSorteado) {
        var numeroElement = document.getElementById("numero");
        var valorDoNumero = numeroElement.innerHTML;

        if (valorDoNumero % 2 == 0) {
            acertos++;
            document.getElementById("acertos").innerHTML = acertos;
            document.getElementById("numero").classList.add("acerto");
        } else {
            erros++;
            document.getElementById("erros").innerHTML = erros;
            document.getElementById("numero").classList.add("erro");
        }
        percentual = ((acertos / paresSorteados) * 100).toFixed(2);
        document.getElementById("percentual").innerHTML = percentual;
    });




    // 4° pausar número aleatório
    document.getElementById("pausar").addEventListener("click", pausarExibicao);

    function pausarExibicao() {
        controlarBtns(false, true);
        clearInterval(cronometroNroAleatorio);
        clearInterval(cronometroTempo); // Interrompe o cronômetro de tempo
    }

    function controlarBtns(play, pause) {
        document.getElementById("iniciar").disabled = play;
        document.getElementById("pausar").disabled = pause;

    }
    controlarBtns(false, true);


    // 8° decermentar tempo

    let tempoRestante = 0; // Inicializa o tempo restante como zero
    let cronometroTempo; // Variável para o temporizador

    function iniciarTempo() {
        if (tempoRestante > 0) {
            return; 
        }

        const tempoTexto = document.getElementById("tempo").textContent;
        const [minutos, segundos] = tempoTexto.split(":").map(Number);

        tempoRestante = minutos * 60 + segundos;

        cronometroTempo = setInterval(function () {
            if (tempoRestante <= 0) {
                parar();
            } else {
                tempoRestante--;
                const minutosRestantes = Math.floor(tempoRestante / 60);
                const segundosRestantes = tempoRestante % 60;
                document.getElementById("tempo").textContent =
                    (minutosRestantes < 10 ? "0" : "") + minutosRestantes + ":" +
                    (segundosRestantes < 10 ? "0" : "") + segundosRestantes;
            }
        }, 1000);
    }

   
    document.getElementById("iniciar").addEventListener("click", iniciarTempo);

    // 9° zerara e parar ao clicar no botão
    function parar() {
        clearInterval(cronometroNroAleatorio);
        clearInterval(cronometroTempo); // Interrompe o cronômetro de tempo
    
        document.getElementById("tempo").textContent = "00:00";
    
        paresSorteados = 0;
        erros = 0;
        acertos = 0;
        percentual = 0;
    
        document.getElementById("sorteados").innerHTML = paresSorteados;
        document.getElementById("erros").innerHTML = erros;
        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("percentual").innerHTML = percentual;
    
        document.getElementById("numero").innerHTML = "-";
        document.getElementById("numero").classList.remove("acerto", "erro");
        controlarBtns(false, true);
    }
    
    document.getElementById("parar").addEventListener("click", parar);

    document.getElementById("sair").addEventListener("click", function () {
        window.location.href = "index.html";
    });


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