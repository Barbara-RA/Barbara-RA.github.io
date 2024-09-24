// textoOriginal= "Jesus Te Ama Jesus, Jesus é muito bom"
textoOriginal= "Jesus Te Ama";

// converter todos os caracteres para maiúsculo
novoTexto= textoOriginal.toUpperCase();
document.write(`<p>${novoTexto}</p>`);

//Converter todos os caracteres para minúsculo
novoTexto= textoOriginal.toLowerCase();
document.write(`<p>${novoTexto}</p>`);

//Extraindo string em maiúsculo
novoTexto=textoOriginal.slice(0,5).toUpperCase();
document.write(`${novoTexto}`)

//Extraindo string + os caracteres a frente conforme indicado a quantidade de caracteres
novoTexto=textoOriginal.toUpperCase();
document.write(`<p>${novoTexto.substr(0,5)}</p>`)

// substituindo palavras
novoTexto= textoOriginal.replace("Jesus","Deus")
document.write(`<p>${novoTexto}</p>`)

// substituindo todas palavras
novoTexto= textoOriginal.replaceAll("Jesus","Deus")
document.write(`<p>${novoTexto}</p>`)

// Quantidade letras
document.write(`<p>${novoTexto.length}</p>`);

// Separa palavras
novoTextoTotal= textoOriginal.split(" ").length
document.write(`<p>${novoTextoTotal}</p>`)
