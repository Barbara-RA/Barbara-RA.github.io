baralho=[];

for(i=1;i<=27;i++){baralho.push(i)}

document.write(`<h1>Distribuição das cartas</h1>`)

for (jogador = 0; jogador < 4; jogador++) {
    document.write(`<h2>Cartas do jogador ${jogador + 1}</h2>`);
    
    for (let carta = 0; carta < 3; carta++) {
        if (baralho.length > 0) {
            sorteio = Math.floor(Math.random() * baralho.length);
            cartaSorteada = baralho.splice(sorteio, 1)[0];
            document.write(`<img src="img/carta${cartaSorteada}.png" alt="">`);
        } else {
            document.write('<p>Baralho vazio!</p>');
        }
    }
}