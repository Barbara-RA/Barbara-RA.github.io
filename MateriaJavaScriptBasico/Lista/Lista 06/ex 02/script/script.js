// acesso aos elementos da página
votosCandidato1 = document.getElementById("votosCandidato1");
votosCandidato2 = document.getElementById("votosCandidato2");
votosCandidato3 = document.getElementById("votosCandidato3");
votosCandidato4 = document.getElementById("votosCandidato4");

box1 = document.getElementById("boxCandidato1");
box2 = document.getElementById("boxCandidato2");
box3 = document.getElementById("boxCandidato3");
box4 = document.getElementById("boxCandidato4");

som = document.getElementById('som');

// iniciando contadores

candidato1=0;
candidato2=0;
candidato3=0;
candidato4=0;

// 1° exibição
votosCandidato1.innerHTML=`${candidato1}`;
votosCandidato2.innerHTML=`${candidato2}`;
votosCandidato3.innerHTML=`${candidato3}`;
votosCandidato4.innerHTML=`${candidato4}`;


// Adicionando eventos
box1.addEventListener("click", function() {
    candidato1++;
    votosCandidato1.innerHTML = candidato1;
    audio();
    
});

box2.addEventListener("click", function() {
    candidato2++;
    votosCandidato2.innerHTML = candidato2;
    audio();
});

box3.addEventListener("click", function() {
    candidato3++;
    votosCandidato3.innerHTML = candidato3;
    audio();
});

box4.addEventListener("click", function() {
    candidato4++;
    votosCandidato4.innerHTML = candidato4;
    audio();
});

function audio(){
    som.play();
}


// preciso contar votos por Personagem toda vez que ele for clicado e exibir a quantidade atualizada após o clique, depois tente otimizar o código
// o desafio era pedir o nome e um cpf válido do eleitor e verificar se ele já votou, caso sim exiba mensagem que o voto já foi computado para esse cpf, caso não conte o voto e agradeça.

// Adicione eventos

// contagemVotos();

// function contagemVotos(){


// if(votosCandidato1.addEventListener("click")){
//     candidato1++;
//     exibeVotos(votosCandidato1,candidato1)
// }else if(votosCandidato1.addEventListener("click")){
//     candidato2++;
//     exibeVotos(votosCandidato2,candidato2);
// }else if(votosCandidato1.addEventListener("click")){
//     candidato3++;
//     exibeVotos(votosCandidato3,candidato3);
// }else if(votosCandidato1.addEventListener("click")){
//     candidato4++;
//     exibeVotos(votosCandidato4,candidato4);
//     }
// // }


// exibeVotos(votosCandidato1,candidato1);

// function exibeVotos(candidato,votos) {
//     `${candidato}`.innerHTML = `${votos}`;
// }



// candidatos= [candidato1,candidato2,candidato3,candidato4];
// // criar função de vericar quem é o mais votado, ou se há empate dos mais votados

// function maxVotos(){
// maxVotosAtuais = Math.max(...candidatos);
// }

// // verificar quem são os candidatos que recebem valores iguais a "maxVotosAtuais" para aplicar a formatação ".maisVotado"
// box1.classList.add("maisVotado");
