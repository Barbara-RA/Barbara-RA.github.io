lista=[];
fulano=1;

do {
    lista.push(prompt(`${lista.length+1}° representante de grupo:`, `Fulano${fulano++}`))   
} while (confirm("Deseja cadastrar outra pessoa?")===true);

nroPessoas=lista.length;

document.write(`<h1>Ordem de apresentação dos grupos:</h1>`)

sorteado=0;

for(i=0;i<nroPessoas;i++){
    sorteado = parseInt(Math.random()*(nroPessoas-i)) 
    document.write(`<p>${i+1} - ${lista[sorteado]}</p> <hr>`)
    lista.splice(sorteado,1);
}
