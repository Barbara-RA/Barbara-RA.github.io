n = prompt("Por favor, indique um número 'N' que será o limite de um número aleatório (1 a N): ", 25)

document.write(`<p>Numero aleatório entre 1 a ${n} ------> <b>${Math.round(Math.random()*n)}</b></p>`);