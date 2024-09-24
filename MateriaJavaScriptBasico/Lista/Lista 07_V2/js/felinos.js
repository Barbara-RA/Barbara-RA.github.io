document.getElementById("gato01").addEventListener("click", function () {
   alert(`Oi ${localStorage.getItem("nome")}, seja bem vindo`)
});


const carinhos = document.getElementById("carinhos");
carinhos.innerHTML = 0;

document.getElementById("gato02").addEventListener("click", function () {
   carinhos.innerHTML = parseInt(carinhos.innerHTML) + 1;
});

document.getElementById("gato03").addEventListener("mouseover", function () {
   gato03.src = "Imagens/Gato06.gif";
});

document.getElementById("gato03").addEventListener("mouseout", function () {
   gato03.src = "Imagens/Gato03.gif";
});

document.getElementById("gato04").addEventListener("mouseover", function () {
   document.getElementById("gato4").innerHTML = "Ai, pare de fazer cócegas";
});

document.getElementById("gato04").addEventListener("mouseout", function () {
   document.getElementById("gato4").innerHTML = "la la la la...";
});

document.getElementById("btAleatorio").addEventListener("click", function () {
   numeroAleatorio = Math.floor(Math.random() * 100) + 1;
   document.getElementById("nroAleatorio").value = numeroAleatorio;
});

