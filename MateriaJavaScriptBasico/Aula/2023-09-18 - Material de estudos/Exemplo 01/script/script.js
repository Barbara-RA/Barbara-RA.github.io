// acesso aos elementos da página
boy = document.getElementById("personagem");
msg = document.getElementById("mensagem")

// após carregamento da página, carrega o personagem pensativo e suas respectivas mensagens
trocarPersonagem('pensativo','zzzzz!');
// boy.src = "img/pensativo.png";
// msg.innerHTML="zzzzz!"

// Adicione eventos
boy.addEventListener("mouseover", function() {trocarPersonagem('assustado','O que você quer?')});
boy.addEventListener("mouseout", function() {trocarPersonagem('pensativo','zzzzz!')});
boy.addEventListener("click", pedirNome)

// função de página
function trocarPersonagem(tipo,texto){
    boy.src=`img/${tipo}.png`;
    msg.innerHTML=texto;
}

function pedirNome(){
    nome=prompt("Qual é o seu nome?")
    if(!nome){
        // boy.classList.remove('alegre');
        trocarPersonagem('nervoso','Não me faça perder o meu tempo!');
        boy.classList.add("nervoso");
    }else{
        trocarPersonagem('alegre',`${nome}, seja bem vinda(o)!`);
        boy.classList.add("alegre");
    }
}


