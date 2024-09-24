let numero;
while (true) {
  numero = parseInt(prompt("Digite um número inteiro positivo maior ou igual a 2:"));
  if (numero >= 2 && Number.isInteger(numero)) {
    break;
  } else {
    alert("O valor deve ser um número inteiro positivo maior ou igual a 2.");
  }
}

document.write("<table>");
document.write("<tr><th>Base decimal</th><th>Base binária</th><th>Base hexadecimal</th></tr>");

for (let i = 0; i <= numero; i++) {
  const binario = i.toString(2);
  const hexadecimal = i.toString(16).toUpperCase();
  document.write(`<tr><td>${i}</td><td>${binario}</td><td>${hexadecimal}</td></tr>`);
}

document.write("</table>");
