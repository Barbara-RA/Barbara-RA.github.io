username = localStorage.getItem("username");
senha = localStorage.getItem("senha");


document.getElementById("username").innerHTML=username;
document.getElementById("pwd").innerHTML=senha;

if((!username)||(!senha)){
    document.getElementById("username").innerHTML="-";
    document.getElementById("pwd").innerHTML="-";

}else{
    document.getElementById("username").innerHTML=username;
    document.getElementById("pwd").innerHTML=senha;
}