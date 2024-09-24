texto = prompt("Digite um texto:");
palavra01 = prompt("Informe uma palavra que presente no texto informado que deseja substituir:");
palavra02 = prompt("Informe outra palavra que substituirá a palavra anterior:");

// Verifica se as duas palavras foram informadas
if (!palavra01 || !palavra02) {
  alert("Por favor, informe ambas as palavras.");
} else if (palavra01.toLowerCase() === palavra02.toLowerCase()) {
  alert("As palavras devem ser diferentes.");
} else {
   palavras = texto.split(" ");
  
  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].toLowerCase() === palavra01.toLowerCase()) {
      palavras[i] = palavra02;
    }
  }
  
  textoSubstituido = palavras.join(" ");
  alert(textoSubstituido);
}