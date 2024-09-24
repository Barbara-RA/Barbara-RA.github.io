// alert("oi");

// for(i=0;i<3;i++)
//     document.write(`<p>${i}Barbara Ramos</p>`);


nome = prompt("Por favor, informe seu nome completo: ");

nomeSemEspaco= nome.replace(" ","");



document.write(`O nome "${nome}" possui ${nome.length} caracteres considerando os espaços e ${nomeSemEspaco.length} caracteres ignorando os espaços vazios`);

