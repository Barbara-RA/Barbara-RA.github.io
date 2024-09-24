// Quando a página html for carregada carregue o Js: todo o Script deve estar dentro dessa classe

window.addEventListener("load",function(){

    document.getElementById("btnMostrar").addEventListener("click",exibirNome)

    
    function exibirNome(){
        document.getElementById("nome").innerHTML="Barbara"
    }

});