window.addEventListener("load", function () {

    document.getElementById("btnAdd").addEventListener("click", function () {
        // 1° criar os elementos
        var img = document.createElement("img");
        var p = document.createElement("p");
        var box1 = document.createElement("div");
        // 2° atribuir valores aos elementos criados
        p.textContent = document.getElementById("txtNome").value;
        img.setAttribute("src", "img/img01.jpg");
        box1.setAttribute("id", "box1");

        // add evento na imagem
        img.setAttribute("name",document.getElementById("txtNome").value);
        img.addEventListener("click", function (event) {exibirMensagem(event)});
        // 3° atribuir os elementos criados como filhos da div
        box1.appendChild(img);
        box1.appendChild(p);
        document.getElementById("box").appendChild(box1);
    });


    function exibirMensagem(event) {
        alert(event.target.name);
    }

});
