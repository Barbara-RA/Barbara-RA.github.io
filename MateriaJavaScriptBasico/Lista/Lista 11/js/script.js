window.addEventListener("load", function(){

    // A
    document.getElementById("validaDtNascimento").addEventListener("click", function(){
        var padrao = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;
        var info= document.getElementById("dtNascimento").value;

        if(padrao.test(info))
            alert("VÁLIDO");
        else
            alert("INVÁLIDO");
    });

    // B
    document.getElementById("validaCpf").addEventListener("click", function(){
        var padrao = /^\d{3}.\d{3}.\d{3}-\d{2}$/;
        var info= document.getElementById("cpf").value;

        if(padrao.test(info))
            alert("VÁLIDO");
        else
            alert("INVÁLIDO");
    });

    // C 
    document.getElementById("validaMatricula").addEventListener("click", function(){
        var padrao = /^(IFTM|iftm)-\d{3}\/\d{3}-\w{2}$/;
        var info= document.getElementById("matricula").value;

        if(padrao.test(info))
            alert("VÁLIDO");
        else
            alert("INVÁLIDO");
    });

    // D 
    document.getElementById("validaDisciplina").addEventListener("click", function(){
        var padrao = /^MT-\d{2}.\d{3}-IFTM$/i;
        var info= document.getElementById("disciplina").value;

        if(padrao.test(info))
            alert("VÁLIDO");
        else
            alert("INVÁLIDO");
    });
    
    // E
    document.getElementById("validaDisciplina2").addEventListener("click", function(){
        var padrao = /^MT-\d{2}.\d{3}-(I|i)(F|f)(T|t)(M|m)$/;        
        var info= document.getElementById("disciplina2").value;

        if(padrao.test(info))
            alert("VÁLIDO");
        else
            alert("INVÁLIDO");
    });

    // F
    document.getElementById("validaDisciplina3").addEventListener("click", function(){
        var padrao = /^M ?T-\d{2}.\d{3}-I ?F ?T ?M$/i;        
        var info= document.getElementById("disciplina3").value;

        if(padrao.test(info))
            alert("VÁLIDO");
        else
            alert("INVÁLIDO");
    });

    // G
    document.getElementById("validacampus").addEventListener("click", function(){
        var padrao = /^(IFTM campus Uberlândia|IFTM campus Uberlândia Centro)$/;        
        var info= document.getElementById("campus").value;

        if(padrao.test(info))
            alert("VÁLIDO");
        else
            alert("INVÁLIDO");
    });

    // H
    document.getElementById("validaTelefone").addEventListener("click", function(){
        var padrao = /^\+\d{2}\(\d{2}\)9\d{4}-\d{4}$/;
        
        var info= document.getElementById("telefone").value;

        if(padrao.test(info))
            alert("VÁLIDO");
        else
            alert("INVÁLIDO");
    });

    // I
     document.getElementById("validaTelefone2").addEventListener("click", function(){
        var padrao = /^\(\d{2,3}\) ?\d{4,5}-\d{4}$/;
        
        var info= document.getElementById("telefone2").value;

        if(padrao.test(info))
            alert("VÁLIDO");
        else
            alert("INVÁLIDO");
    });

    // J
    document.getElementById("validaAltura").addEventListener("click", function(){
        var padrao = /^(1.[3-9][0-9]?|2.[0-4][0-9]?|2.5|1,[3-9][0-9]?|2,[0-4][0-9]?|2,5)$/;
        
        var info= document.getElementById("altura").value;

        if(padrao.test(info))
            alert("VÁLIDO");
        else
            alert("INVÁLIDO");
    });

    // K
    document.getElementById("validaFaturamento").addEventListener("click", function(){
        var padrao = /^R\$\d{1,3}(?:\.\d{3})*(?:\,\d{1,2})?$/;        ;
        
        var info= document.getElementById("faturamento").value;

        if(padrao.test(info))
            alert("VÁLIDO");
        else
            alert("INVÁLIDO");
    });

    // L
    document.getElementById("validaCronometro").addEventListener("click", function(){
        var padrao = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]:[0-9][0-9]$/;
        
        var info= document.getElementById("cronometro").value;

        if(padrao.test(info))
            alert("VÁLIDO");
        else
            alert("INVÁLIDO");
    });
    

});