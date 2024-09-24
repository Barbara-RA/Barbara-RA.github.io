window.addEventListener("load",function(){
    document.getElementById("cadastrar").addEventListener("click", cadastrarUsuario);


    function cadastrarUsuario(){
        var user= document.getElementById("usuario").value;
        var pwd = document.getElementById("senha").value;
        var checPwd= document.getElementById("confirmaSenha").value;


        if((user=="")||(pwd=="")||(checPwd=="")){
            alertWifi("Olá, tudo bem?", false, 0, "", 30, "");
        }else{
            if(pwd=checPwd){
                // localStorage.setItem("usuario",user);
                // localStorage.setItem("senha",pwd);
                
                var usuarios= localStorage.setItem("usuario");
                Objeto = {nome:user,seha:pwd};
                if(!usuarios){
                    var vetUsuarios=[];
                    vetUsuarios.push(JSON.stringify(Objeto))
                    localStorage.setItemtItem("")

                }
                
                alertWifi("Cadastratdao com sucesso", false, 0, "", 30, "");
            } else {
                alertWifi("As senha são diferentes", false, 0, "", 30, "");
            }
        };
            
    };



});