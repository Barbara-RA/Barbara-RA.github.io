nome = prompt("Qual o seu primeiro nome?");
sobrenome = prompt("Qual o seu sobrenome nome?");
n=prompt("informe quantas vezes você quer que haja a repetição (utilize caractéres numéricos):");

for (i=1; i<=n; i++)
document.write(`<p>${i} - ${nome} ${sobrenome}</p>`);
