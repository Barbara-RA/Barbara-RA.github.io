texto=prompt("Informe um texto qualquer:","O amor é um sentimento sublime. AMOR é entrega desde que o Amor seja verdadeiro.");
palavra=prompt("Informe a palavra a ser encontrada:","amor");


texto=texto.replaceAll(".","");
texto=texto.replaceAll(",","");
texto=texto.replaceAll("!","");
texto=texto.replaceAll("?","");
texto=texto.replaceAll("/","");
texto=texto.replaceAll(")","");
texto=texto.replaceAll("(","");


textoModificado=texto.toLowerCase().split(" ");
texto=texto.split(" ");

palavraModificada=palavra.toLowerCase();

quandidadeEncontrada=0;
palavrasEncontradas=[];

for(i=0;i<textoModificado.length;i++){
    if(textoModificado[i]==palavra){
        quandidadeEncontrada++
        palavrasEncontradas.push(texto[i])
    }
}


document.write(`<p>Palavras encontradas: `);
for(i=0;i<palavrasEncontradas.length;i++){
    if(i==(palavrasEncontradas.length-1)){
        document.write(`${palavrasEncontradas[i]}`)
    }else{
        document.write(`${palavrasEncontradas[i]}, `)
    }
        
}
document.write(`</p>`)


document.write(`Número de ocorrências: ${quandidadeEncontrada}`)



