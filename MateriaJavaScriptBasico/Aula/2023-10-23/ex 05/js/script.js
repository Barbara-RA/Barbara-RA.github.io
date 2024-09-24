window.addEventListener("load", function(){

    document.getElementById("btnPlay").addEventListener("click",iniciarContator);
    document.getElementById("btnPause").addEventListener("click",pararContator)

    var cronometroNroAleatorio;

    function iniciarContator(){
        cronometroNroAleatorio = setInterval(numeroAleatorio, 1000);
    }

    function numeroAleatorio(){
        document.getElementById("numero").innerHTML=Math.floor(Math.random()*1000)+1;
    }

    function pararContator(){
        clearInterval(cronometroNroAleatorio)
    }




});