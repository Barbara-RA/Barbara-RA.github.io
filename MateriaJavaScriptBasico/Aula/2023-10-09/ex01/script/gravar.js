username= document.getElementById("usuario").value;
senha= document.getElementById("senha").value;
registrar =document.getElementById("cadastrar")

registrar.addEventListener("click", cadastro());



function cadastro(){
    localStorage.setItem("usuario",usuario);
    localStorage.setItem("senha",senha);
    document.write("<h2>Usuário cadastrado com sucesso</h2>");
}

