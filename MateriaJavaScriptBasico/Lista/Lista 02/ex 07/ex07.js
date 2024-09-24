texto=prompt("Digite um texto: ", "amor carro bola bexiga caminhão aranha pastel");
letra = prompt("Informe uma letra que contenha na frase informada:")

vetTexto= texto.split(" ");

vetPalavra = vetTexto.filter(palavra => palavra.startsWith(letra));

palavrasFiltradas = vetPalavra.join(" ");

// Imprimir as palavras filtradas
document.write(`<p>${palavrasFiltradas}</p>`);