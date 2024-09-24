// nome = prompt("Por favor, informe seu nome completo: ");
// separandoNome= nome.split(" ");
// quantidadeNome=separandoNome.length;

// nomeNovo="";

// for(i=0;i<quantidadeNome;i++){
//     if(i==0){
//         nomeNovo+=separandoNome[i].toUpperCase()+" ";
//     }else{
//         nomeNovo+=separandoNome[i].toLowerCase()+" ";

//     }
// }

// alert(`${nomeNovo}`)


nome=prompt("Digite o seu nome completo: ","Barbara Ramos Alves");

nome = nome.toLowerCase().split(" ");
nome[0] = nome[0].toUpperCase();
nome = nome.join(" ");

alert(nome);

