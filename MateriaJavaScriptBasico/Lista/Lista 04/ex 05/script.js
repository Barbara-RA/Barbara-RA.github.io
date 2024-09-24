passageiros = prompt("Informe a quantidade de passageiros no ônibus: ", "3")

// Validação:
while(passageiros<=1){
    alert("Informe uma quantidade maior que 1.")
    passageiros = prompt("Informe a quantidade de passageiros no ônibus: ")

}

// declação de vetor
VetNome=[];
VetIdade=[];
fulano=1;
// Incremento de vetores
for(i=0;i<passageiros;i++){
    VetNome.push (prompt(`${i+1}° Nome:`,`Fulano${fulano++}`))
    VetIdade.push (parseInt(prompt(`Idade de ${VetNome[i]}:`, `${fulano++ +30}`)))
}

// soma= VetIdade.reduce((acumulador, elemeto) => {return acumulador+elemeto;}, 0);

media = VetIdade.reduce((acumulador, elemeto) => {return acumulador+elemeto;}, 0)/VetIdade.length;
sorteado = Math.round((Math.random()*VetIdade.length)-1)

// apresentando respostas
document.write(`<p><b>Dentre os ${VetIdade.length} passageiros o sorteado é: </b>***** ${VetNome[sorteado].toUpperCase()}***** que tem ${VetIdade[sorteado]} anos</p>`);
document.write(`<p><b>A média de idade dos passageiros é: ${media}</b></p>`)