nomeCompleto = prompt("Qual o seu nome completo? ", "Barbara Ramos");
idade = prompt("Quantos anos você tem? ");

while((idade =="")||(idade==null)||(isNaN(idade))){
    alert("Favor informar a idade")
    idade = prompt("Quantos anos você tem? ")
};

if(idade>=18){
    alert(`${nomeCompleto}, você já POSSUI idade para tirar carteira`)
} else{
    alert(`${nomeCompleto}, você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) ${18-idade} anos.`)
};

