window.addEventListener("load", function(){

    document.getElementById("btnMostrar").addEventListener("click",iniciarContator);

    function iniciarContator(){
        setTimeout(numeroAleatorio, 1000);
    }

    function numeroAleatorio(){
        document.getElementById("numero").innerHTML=Math.floor(Math.random()*10)+1;
    }



});