baralho=[];

for(i=1;i<=27;i++){baralho.push(i)}

document.write(`<p>Carta sorteada:</p> `)
document.write(`<img src="img/carta${Math.round(Math.random()*(baralho.length))}.png" alt="">`)
