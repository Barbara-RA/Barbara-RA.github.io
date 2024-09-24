numero = parseInt(prompt("por favor informe um número positivo maior que zero para repetições:"));
nome = prompt("Por favor, informe o seu nome completo:")

while(numero<0){
    alert(`Esse numero é inválido`)
    numero= numero = parseInt(prompt(`informe um número positivo maior que zero`));
}


for(i=0;i<numero;i++){
    document.write(`<p>${nome}</p>`)
}