texto = prompt("Digite um texto:").toLowerCase(); // Converte para minúsculas para comparação


function ehPalindromo(texto) {
   textoLimpo = texto.replace(/[^a-z0-9]/g, ""); // Remove caracteres não alfanuméricos
   reverso = textoLimpo.split("").reverse().join("");
  return textoLimpo === reverso;
}

if (ehPalindromo(texto)) {
  alert("O texto informado é um palíndromo!");
} else {
  alert("O texto informado não é um palíndromo.");
}