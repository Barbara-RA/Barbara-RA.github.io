texto = prompt("Digite um texto: ");
vetTexto = texto.split(" ");

let letras = {}; //  armazenar as palavras por letra inicial

for (let palavra of vetTexto) {
  let letraInicial = palavra[0].toLowerCase(); // Obtém a primeira letra da palavra em minúsculo

  if (!letras[letraInicial]) {
    letras[letraInicial] = []; // Inicializa o array se ainda não existe para essa letra
  }

  letras[letraInicial].push(palavra); // Adiciona a palavra ao array correspondente
}

// Imprimi as palavras filtradas por letra inicial
for (let letra in letras) {
  document.write(`<p>Palavras iniciadas com a letra ${letra}:</p>`);
  document.write("<ul>");

  for (let palavra of letras[letra]) {
    document.write(`<li>${palavra}</li>`);
  }

  document.write("</ul>");
}
