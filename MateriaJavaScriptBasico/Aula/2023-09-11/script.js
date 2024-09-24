//1°  leitura

nroPessoas= prompt("Informe quantas pessoas participarão do sorteio?", `4`)

//° leitura e armazenamento dos nomes
pessoas=[];

for(i=0;i<nroPessoas;i++){
    pessoas.push(prompt(`Digite o nome da ${i+1}pessoa`, `Fulano ${i+1}`))
}

console.log(pessoas);
