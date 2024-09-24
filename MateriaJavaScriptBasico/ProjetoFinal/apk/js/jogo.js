window.addEventListener("load", function () {

    let minuto = 0;
    let segundo = 0;
    let cronometro;
    let temporizadorNumero;
    let numeroCorreto = 0;
    let numeroIncorreto = 0;
    let totalPares = 0;
    let numeroAleatorio = 0;

    document.getElementById("nivel").addEventListener("change", function () {
        let opcao = document.getElementById("nivel").value;

        if (opcao == "facil") {
            minuto = 1;
            segundo = 45;
        } else if (opcao == "medio") {
            minuto = 1;
            segundo = 15;
        } else if (opcao == "dificil") {
            minuto = 0;
            segundo = 30;
        }

        preencherTempo(minuto, segundo);
    });

    document.getElementById("pausar").addEventListener("click", function () {
        clearInterval(cronometro);
        clearInterval(temporizadorNumero);
    });

    document.getElementById("iniciar").addEventListener("click", function () {
        let opcao = document.getElementById("nivel").value;
        let intervalo;

        if (opcao == "facil") {
            intervalo = 1000;
        } else if (opcao == "medio") {
            intervalo = 500;
        } else if (opcao == "dificil") {
            intervalo = 250;
        } else {
            alertWifi("Selecione um nível!", false, 0, "", 30, "");
            return;
        }
        iniciarJogo(minuto, segundo);
        temporizadorNumero = setInterval(preencherNumero, intervalo);
    });

    document.getElementById("parar").addEventListener("click", function () {
        location.reload();
    });

    function iniciarJogo(min, sec) {
        minuto = min;
        segundo = sec;

        cronometro = setInterval(() => { temporizador(); }, 1000);
    }

    function temporizador() {
        if (minuto == 0 && segundo == 0) {
            alertWifi("Fim de Jogo!", false, 0, "", 30, "");
            clearInterval(cronometro);
            clearInterval(temporizadorNumero);
            return;
        }
        if (segundo == 0) {
            segundo = 59;
            minuto--;
        } else {
            segundo--;
        }

        preencherTempo(minuto, segundo);
    }

    function preencherTempo(min, sec) {
        document.getElementById("tempo").innerHTML = (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
    }

    function preencherNumero() {
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;

        document.getElementById("numero").style.color = "white";
        document.getElementById("numero").innerHTML = numeroAleatorio;

        if (numeroAleatorio % 2 == 0) {
            adicionarPares();
        }
    }

    function adicionarPares() {
        totalPares++;
        document.getElementById("sorteados").innerHTML = totalPares;

        preencherPercentual();
    }

    function adicionarNumeroIncorreto() {
        numeroIncorreto++;
        document.getElementById("erros").innerHTML = numeroIncorreto;
        document.getElementById("numero").style.color = "red";
    }

    function adicionarNumeroCorreto() {
        numeroCorreto++;
        document.getElementById("acertos").innerHTML = numeroCorreto;
        document.getElementById("numero").style.color = "green";

        preencherPercentual();
    }

    document.getElementById("numero").addEventListener("click", function () {
        if (numeroAleatorio != 0) {
            if (numeroAleatorio % 2 == 0) {
                adicionarNumeroCorreto();
            } else {
                adicionarNumeroIncorreto();
            }
        }
    });

    function preencherPercentual() {
        let percentual = ((numeroCorreto / totalPares) * 100).toFixed(2);
        document.getElementById("percentual").innerHTML = " (" + percentual + "%)";
    }

    document.getElementById("sair").addEventListener("click", function () {
        window.location.href = "index.html";
    });


    var audioAtual; // Variável para armazenar o objeto de áudio atual

    function obterEstiloAtual() {
        var estilo = localStorage.getItem("estilo");
    
        if (estilo === null) {
            estilo = 1;
            localStorage.setItem("estilo", estilo);
        } else {
            estilo = parseInt(estilo);
        }
    
        return estilo;
    }
    
    function alteraEstilo() {
        var estiloAtual = obterEstiloAtual();
    
        // Pausa a música atual, se estiver tocando
        if (audioAtual) {
            audioAtual.pause();
        }
    
        if (estiloAtual === 1) {
            document.getElementById("estiloAtual").href = "css/layoutKids.css";
            audioAtual = new Audio("audio/Steven Universe.mp3");
        } else {
            document.getElementById("estiloAtual").href = "css/layout.css";
            audioAtual = new Audio("audio/soft-ambient-10782.mp3");
        }
    
        // Inicia a música correspondente ao estilo atual
        audioAtual.play();
    
        localStorage.setItem("estilo", 3 - estiloAtual);
    }
    
    document.getElementById('alteraEstilo').addEventListener("click", alteraEstilo);
    
    var estiloInicial = obterEstiloAtual();
    if (estiloInicial === 2) {
        document.getElementById("estiloAtual").href = "css/layoutKids.css";
        audioAtual = new Audio("audio/Steven Universe.mp3");
    } else {
        audioAtual = new Audio("audio/soft-ambient-10782.mp3");
    }
    
    // Inicia a música correspondente ao estilo inicial
    audioAtual.play();

});