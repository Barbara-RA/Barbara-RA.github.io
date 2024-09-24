nome=prompt("Digite o seu nome completo: ","Barbara Ramos Alves");

nome = nome.toLowerCase().split(" ");
nome[0] = nome[0].toUpperCase();
nome = nome.join(" ");

document.write(nome);
