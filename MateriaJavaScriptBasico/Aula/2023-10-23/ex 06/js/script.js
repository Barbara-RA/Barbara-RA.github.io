window.addEventListener("load", function(){

    document.getElementById("btnPlay").addEventListener("click",iniciarContator);
    document.getElementById("btnPause").addEventListener("click",pararContator);

    var cronometroNroAleatorio;

    function iniciarContator(){
        controlarBtns(true,false);
        cronometroNroAleatorio = setInterval(numeroAleatorio, 1000);
    }

    function pararContator(){
        controlarBtns(false,true);
        clearInterval(cronometroNroAleatorio);
    }

    function numeroAleatorio(){
        document.getElementById("numero").innerHTML=Math.floor(Math.random()*1000)+1;
    }

    
    function controlarBtns(play,pause){
        document.getElementById("btnPlay").disabled =play;
        document.getElementById("btnPause").disabled =pause;

    }
    
    controlarBtns (false,true);



});