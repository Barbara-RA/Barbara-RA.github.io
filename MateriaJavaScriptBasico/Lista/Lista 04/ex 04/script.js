console.clear();

inicio = prompt("Por favor, indique um número inicial para calcular um número aleatório: ", 4)
fim = prompt("Por favor, indique um número que será o limite para o sorteio de um número aleatório: ", 25)

document.write(`<p>Numero aleatório entre ${inicio} a ${fim} ------> <b>${Math.round(Math.random()*(fim-inicio)+inicio)}</b></p>`);

