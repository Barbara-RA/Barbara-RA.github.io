window.addEventListener("load", function(){

    document.getElementById("btn").addEventListener("click", function(){
        // var padrao = /\d/; Expressão regular para validar se tem número no campo
        // var padrao = /^\d/;Expressão regular para validar se tem número no início do campo
        // var padrao = /^ \d/;//Expressão regular comça com número seguido de espaço no início do campo
        // var padrao = /^  \d/;//Expressão regular comça com número seguido de espaço no início do campo

        // var padrao=/\d$/; //Expressão regular para validar se tem número no final do campo
        // var padrao=/^ \d \d$/; //Expressão regular para colocar espaço número, espaço número no início e final do campo
        // var padrao=/^\d\d-\d\d-\d\d\d\d$/; //Expressão regular para validar data no formato dd-mm-aaaa

        // var padrao=/^\d{2}-\d{2}-\d{4}$/;//Expressão regular para validar data no formato dd-mm-aaaa delimitando espaço com chaves


        // var padrao= /^\d{5}-\d{4}$/; //valida telefone no formato xxxxx-xxxx
        // var padrao=/^\d{3}.\d{3}.\d{3}-\d{2}$/ //; //valida CPF no formato xxx.xxx.xxx-xx
        // var padrao= /^\d{4,5}-\d{4}$/; //valida telefone no formato x xxxx-xxxx ou xxxx-xxxx - limite do intervalo com vírgula de 4 a 5 caracteres
        // var padrao = /^[02468]{1,2}$/; //valida número par de 1 a 2 caracteres
        // var padrao = /^[bna ]{3,}$/; //valida se tem b, n ou a no campo de 3 a infinitos caracteres
        // var padrao = /^[a-z]$/i; //valida se tem a ou z no campo de 3 a infinitos caracteres
        // var padrao = /^[^a-z89+-/?.!]$/;//valida se não tem a, z, 8, 9, +, -, /, ?, ., ! no campo de 3 a infinitos caracteres
        // var padrao = /^(regular|bom|excelente)$/;
        // var padrao = /^IFTM-\d{4,6}-(TSPI|LCO|MKT):\d[a-z]$/i; //valida se tem IFTM-xxxxxx-(TSPI|LCO|MKT):x ou X no campo de 3 a infinitos caracteres "IFTM-1234-TSPI:9Z"
        // var padrao = /^IFTM-[6-9]{4,6}-(TSPI|LCO|MKT):\d[a-z]$/i;
        // var padrao = /^IFTM-[6-9]{4,6}-(TSPI|LCO|MKT):\d[a-fv-z]$/i;
        // var padrao = /^IFTM-[6-9]{4,6}-(TSPI|LCO|MKT):\d\s?[a-fv-z]$/i;
        var padrao = /^\w{4}$/; //valida se tem 4 caracteres alfanuméricos;
        // \ invertida antes do ( e . pois são palavras reservadas


        var info= document.getElementById("txt").value;

        if(padrao.test(info))
            alert("VÁLIDO");
        else
            alert("INVÁLIDO");

        
        
    });
});