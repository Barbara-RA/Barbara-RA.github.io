// Adicionando eventos
document.getElementById("calcular").addEventListener("click", function () { resultadoFinal() });

function resultadoFinal() {
    // Acesso aos elementos da página
    valor01 = parseFloat(document.getElementById("valor01").value);
    valor02 = parseFloat(document.getElementById("valor02").value);
    operador = document.getElementById("operador").value;
    resultado = document.getElementById("resultado");

    // Verificando o operador e calculando o resultado
    if (operador == "+") {
        resultado.innerHTML = valor01 + valor02;
    } else if (operador == "-") {
        resultado.innerHTML = valor01 - valor02;
    } else if (operador == "*") {
        resultado.innerHTML = valor01 * valor02;
    } else if (operador == "/") {
        if (valor02 == 0) {
            resultado.innerHTML = "Não existe divisão por zero.";
        } else {
            resultado.innerHTML = valor01 / valor02;
        }
    }
}