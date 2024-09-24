valor01=parseFloat(prompt("CALACULADORA\n Informe o primeiro valor da operação matemática:",10));
valor02= parseFloat(prompt("Informe o segundo valor da operação matemática:",20));
operador= prompt("Indique 1 operador para realizar o cáuculo(+, -, / ou *)");



if(operador=="+"){
    alert(`Resultado: ${valor01+valor02}`)
}else if(operador=="-"){
    alert(`Resultado: ${valor01-valor02}`)
}else if(operador=="*"){
    alert(`Resultado: ${valor01*valor02}`)
}else if(operador=="/"){
    if(valor02==0){
        alert("não existe divisão por zero.")
    }else{
        alert(`Resultado: ${valor01/valor02}`)
    }
    
}


// resultado.toFixed(2);