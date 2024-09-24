texto=prompt("Digite um texto: ");

vetorTexto = texto.split(" ");
quantidadePalavras = vetorTexto.length;

document.write(`<p>${vetorTexto[0]} ${vetorTexto[quantidadePalavras-1]}</p>`)