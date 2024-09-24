window.addEventListener('load', function (){

    document.getElementById("btnCadastrar").addEventListener("click", cadastrarUsuario);

    function cadastrarUsuario(){
        var user = document.getElementById("txtUser").value;
        var pwd = document.getElementById("txtPwd").value;
        var checkPwd = document.getElementById("txtCheckPwd").value;

        if(user==""||pwd==""||checkPwd==""){
            alertWifi("Preencha todos os campos", false,0,"",30,"");
        }
        else{
            
            if(pwd==checkPwd){
                var novoUsuario = {nome:user, senha:pwd};
                var vetUsuarios = localStorage.getItem("vetUsuarios");
                if(!vetUsuarios){
                    var vet = [];
                    vet.push(novoUsuario);
                    localStorage.setItem("vetUsuarios", JSON.stringify(vet));
                }else{
                    vet =JSON.parse(vetUsuarios);
                    vet.push(novoUsuario);
                    localStorage.setItem("vetUsuarios", JSON.stringify(vet));
                }

                alertWifi("Usuário cadastrado com sucesso", false,0,"",30,"");
                
            }

        }
    }

    


});