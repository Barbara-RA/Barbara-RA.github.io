// nome;

// do {
//     nome = prompt("Por favor, informe seu nome completo:");
//     palavras = nome.split(" ");
//     quantidadePalavras = palavras.length;

//     if (quantidadePalavras <= 1 || nome == "" || nome == null) {
//         alert("Informe seu nome completo (nome e sobrenome)");
//     }
// } while (quantidadePalavras <= 1 || nome == "" || nome == null);



nome = prompt("Por favor, informe seu nome completo:");
// 01 - Quantidade de carcteres:

document.write(`<p>Seu nome possui ${nome.length} caracteres</p>`);

// 02 - Primeira letar do nome:
primeirLetra = nome[0];
document.write(`<p>A primeira letra do seu nome é ${primeirLetra}</p>`);

// 03 - Nome convertido para maúsculo:
document.write(`<p>Seu nome convertido para letras maíusculas: ${nome.toUpperCase()}</p>`);
// 04 - Quantidade palavras:
palavras=nome.split(" ");
quantidadePalavras = palavras.length;

document.write(`<p>Seu nome possui ${quantidadePalavras} palavras</p>`);

// 05 - nome na cor vermelho:

document.write(`<p>Seu nome <span style='color:red'>${nome}</span> na cor vermelho</p>`);

// 06 - Nome 5x na cor azul:
document.write(`Seu nome escrito 5 vezes na cor azul:`)

for(i=0;i<5;i++){
    document.write(`<p style='color:blue'>${nome}</p>`)
}