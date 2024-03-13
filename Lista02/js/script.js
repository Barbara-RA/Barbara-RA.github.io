window.addEventListener('load', function() {
    document.write(`<p>Vetor: [${vet}]</p>`);
    document.write(`<p>Quantidade de elementos no vetor acima: ${vet.length}</p>`);
    // A
    document.write(`<p>A - Soma das idades: ${vet.reduce((element, soma) => soma+= element)}</p>`);

    // B
    document.write(`<p>B - Média das idades: ${vet.reduce((element, soma) => soma+= element) / vet.length}</p>`);
    
    // C
    document.write(`<p>C - A maior idade é: ${vet.reduce((maior, element)=> element > maior ? maior = element : maior, vet[0])}</p>`);
    
    // D
    document.write(`<p>D - As idades ímpares: ${vet.map(element=>element % 2 != 0)}</p>`);

    // E
    document.write(`<p>E - Todos são maiores de idade? ${vet.every(element=>element >=18)}</p>`);

    // F
    document.write(`<p>F - Alguma idade é maior que ${novaIdade} anos: ${vet.some(element=>element > novaIdade)}</p>`);

    // G
    document.write(`<p>G - Idades maiores ou iguais a ${novaIdade}: ${vet.filter(element=>element>=novaIdade)}</p>`);


    // H
    document.write(`<p>H - Média das idades das pessoas com idades maiores ou iguais a ${novaIdade}: ${vet.filter(element=>element>=novaIdade).reduce((element, soma) => soma+= element) / vet.filter(element=>element>=novaIdade).length} </p>`);

});

vet = [ 10, 18, 20, 23, 15, 30, 28, 52, 40, 7, 50, 25, 60, 17, 79, 38, 3, 97];

novaIdade = prompt("Digite uma idade que deseja comparar no vetor: ",50);

//D
// document.write(`<p>D - As idades ímpares: ${vet.filter(element=>element % 2 != 0)}</p>`);

// F
// verificaIdades = (vet, novaIdade) => vet.some(element=>element >= novaIdade);



