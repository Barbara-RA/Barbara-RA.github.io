window.addEventListener("load", function () {

    document.getElementById("btnAdd").addEventListener("click", function () {
        // 1° criar o elemento img
        var img = document.createElement("img");
        // 2° colocar a imagem no endereço da tag img "colocar atributo src"
        img.setAttribute("src","img/img01.jpg");
        // 3° atribuir a img como filha da div
        document.getElementById("box").appendChild(img); 

    });

});