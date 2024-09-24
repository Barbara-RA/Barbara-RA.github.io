// nota1 = parseFloat(prompt("Por favor, informe a nota do primeiro bimestre: "));
// nota2 = parseFloat(prompt("Por favor, informe a nota do segundo bimestre: "));

nota1 = prompt("Por favor, informe a nota do primeiro bimestre: ");
nota2 = prompt("Por favor, informe a nota do segundo bimestre: ");


// while((nota1=="")||(nota1=="null")||(isNaN(nota1))){
//     alert("Informe a nota do primeiro bimestre (caractéres numéricos)")
//     nota1 = prompt("Por favor, informe a nota do primeiro bimestre: ");
// }

// while((nota2=="")||(nota2=="null")||(isNaN(nota2))){
//     alert("Informe a nota do primeiro bimestre (caractéres numéricos)")
//     nota1 = prompt("Por favor, informe a nota do primeiro bimestre: ");
// }

notaTotal=parseFloat(nota1)+parseFloat(nota2);

if(notaTotal >=60){
    alert("Você está aprovado!!")
}else
    alert(`Você foi reprovado, faltaram ${60-notaTotal}!\n Estude mais!`);
