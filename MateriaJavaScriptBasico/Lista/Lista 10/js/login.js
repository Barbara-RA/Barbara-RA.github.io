window.addEventListener("load", function () {
    document.getElementById("btnEntrar").addEventListener("click", verificarLogin);

    function verificarLogin(){
        var user = document.getElementById("txtUser").value;
        var pwd = document.getElementById("txtPwd").value;
        var vetUsuarios;

        if(user == "" || pwd == ""){
            alertWifi("Preencha todas as informações", false,0,"",30,"");
        }else{
            vetUsuarios=JSON.parse(localStorage.getItem("vetUsuarios"));

            var achou=false;
            if(!vetUsuarios) {alertWifi("Não há usuário cadastrado", false,0,"",30,"");
            }else{
                for(i=0;i<vetUsuarios.length;i++){
                    if(vetUsuarios[i].nome == user && vetUsuarios[i].senha == pwd){
                        achou=true;
                        break;
                    }
                };

                if(achou==true){ 
                    window.location.href="jogo.html";
                    }else{ alertWifi("Senha ou usuário incorreto(os).", false,0,"",30,"");
                };
            };
        };
    };

    // document.getElementById('btnKids').addEventListener('click', function() {
    //     var stylesheet = document.getElementById('padrao');
    
    //     if (stylesheet.href.includes('layout.css')) {
    //         stylesheet.href = 'css/layoutKids.css';
    //     } else {
    //         stylesheet.href = 'css/layout.css';
    //     }
    // });
    


});