window.addEventListener("load", function(){

    document.getElementById("btnMostrar").addEventListener("click",iniciarContator);

    function iniciarContator(){
        setInterval(numeroAleatorio, 1000);
    }

    function numeroAleatorio(){
        document.getElementById("numero").innerHTML=Math.floor(Math.random()*1000)+1;
    }



});