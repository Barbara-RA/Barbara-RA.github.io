nome = prompt("Qual o seu primeiro nome?");
sobrenome = prompt("Qual o seu sobrenome? ");
n = parseInt(prompt("Informe quantas vezes você quer que haja a repetição (utilize caracteres numéricos):"));

while (isNaN(n) || n <= 0) {
    alert("Quantidade inválida");
    n = parseInt(prompt("Informe quantas vezes você quer que haja a repetição (utilize caracteres numéricos):"));
}

cor = prompt("Informe um código de cor em hexadecimal para os sobrenomes nas posições pares (inicie com '#'):");

while (cor.length !== 7 || cor[0] !== "#") {
    alert("Cor inválida");
    cor = prompt("Informe um código de cor em hexadecimal para os sobrenomes nas posições pares (inicie com '#'):");
}

separandoSobrenome = sobrenome.split(" ");
quantidadeSobrenome = separandoSobrenome.length;

for (let i = 1; i <= n; i++) {
    let formattedName = `<p>${i} - <span style="color: black;">${nome}</span>`;

    for (let j = 0; j < quantidadeSobrenome; j++) {
        sobrenomeCor = (j % 2 != 0) ? 'black' : cor;
        formattedName += ` <span style="color: ${sobrenomeCor};">${separandoSobrenome[j]}</span>`;
    }

    formattedName += "</p>";
    document.write(formattedName);
}

