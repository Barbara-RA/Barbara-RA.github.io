window.addEventListener("load", function () {

    document.getElementById("btnAdicionar").addEventListener("click", function () {
        // 1° criar o elemento p
        var p = document.createElement("p");
        // 2° colocar o texto da cixa de text em p
        p.textContent = document.getElementById("txtNome").value;
        // 3° adicionar p dentro da div
        document.getElementById("boxNome").appendChild(p);
        // se quiser remover o texto da caixa de texto

    });

});