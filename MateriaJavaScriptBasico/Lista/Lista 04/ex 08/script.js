jogador1= prompt(`JOQUEMPÔ\n*** Jogador 1*** \nEscolha uma opção (“Pedra”, “Papel” ou “Tesoura”): \n `).toUpperCase();

// Validação jogador 01
while(jogador1!="PEDRA" & jogador1!="PAPEL"& jogador1!="TESOURA"){
    alert(`Erro: Você informou uma opção inexistente '${jogador1}' Escolha uma opção válida “Pedra”, “Papel” ou “Tesoura” `);
    jogador1= prompt(`JOQUEMPÔ - *** Jogador 1*** \nEscolha uma opção (“Pedra”, “Papel” ou “Tesoura”): \n `).toUpperCase();
}



jogador2= prompt(`JOQUEMPÔ\n*** Jogador 2*** \nEscolha uma opção (“Pedra”, “Papel” ou “Tesoura”): \n `).toUpperCase();
// Validação jogador 02
while(jogador2!="PEDRA" & jogador2!="PAPEL"& jogador2!="TESOURA"){
    alert(`Erro: Você informou uma opção inexistente '${jogador2}' Escolha uma opção válida “Pedra”, “Papel” ou “Tesoura” `);
    jogador2= prompt(`JOQUEMPÔ\n*** Jogador 1*** \nEscolha uma opção (“Pedra”, “Papel” ou “Tesoura”): \n `).toUpperCase();
}

resultado="";

// verificando o resultado

if (jogador1 == jogador2) {
  resultado = "Empate";
} else if ( (jogador1 == "PEDRA" && jogador2 == "TESOURA") ||  (jogador1 == "PAPEL" && jogador2 == "PEDRA") ||  (jogador1 == "TESOURA" && jogador2 == "PAPEL")) {
  resultado = "Jogador 1 venceu!";
} else {
  resultado = "Jogador 2 venceu!";
}


// Exibir o resultado
document.write(`<h1>JOGADA</h1>`);
document.write(`<p>Jogador 01:<img src="img/${jogador1}.png"></p>`)
document.write(`<p>Jogador 02:<img src="img/${jogador2}.png"></p>`)

document.write(`<p><b>Resultado:\n${resultado}</b></p>`);
