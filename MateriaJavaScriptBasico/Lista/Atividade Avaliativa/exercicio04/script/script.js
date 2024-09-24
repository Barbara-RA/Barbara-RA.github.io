texto = prompt("Informe um texto qualquer:", "O amor é um sentimento sublime. O amor é entrega desde que o amor seja verdadeiro");
formatacao = parseInt(prompt("Que configuração você quer aplicar (1) itálico, (2) negrito ou (3) sublinhado:", "3"));

if (formatacao == 1) {
    document.write(`<p><i>${texto}</i></p>`);
} else if (formatacao == 2) {
    document.write(`<p><b>${texto}</b></p>`);
} else if (formatacao ==3) {
    document.write(`<p><u>${texto}</u></p>`);
} else {
    document.write(`<p>Opção de formatação inválida</p>`);
}