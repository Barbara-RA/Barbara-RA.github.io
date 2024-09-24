window.addEventListener("load", function(){
    nome=localStorage.getItem("nome");
    if(nome){
        vetNomes=nome.split(" ");
        if(vetNomes.length>1){
            // painel de sucesso pois possui nome e sobrenome
            document.getElementById("painelSucesso").classList.remove("invisivel");
            document.getElementById("painelSucesso").classList.add("visivel");
            document.getElementById("nomeUsuario").innerHTML=nome;
        } else{
            // painel de erro apena 1 nome
            showMsgErro("Nome existente, Informe NOME + SOBRENOME separados por espaço");
        }
    }else{
        showMsgErro("Nome Inválido, faça o cadastro do usuário. Clique no link abaixo.")
    }
    
});

document.getElementById("btnJogar").addEventListener("click", function(){
    window.open("felinos.html","_self");
});

function showMsgErro(msg){
    document.getElementById("painelErro").classList.remove("invisivel");
    document.getElementById("painelErro").classList.add("visivel");
    document.getElementById("msgErro").innerHTML=msg;
}