var limpaDados = function(){   
    document.getElementById('email');
    document.getElementById('mensagem');

    if(email.value == "")
    {
        alert("Por favor preencha seu e-mail.");
        document.getElementById('email').focus();
        return false;
            
    }
    if(mensagem.value == "")
    {
        alert("Por favor digite uma mensagem.");
        document.getElementById('mensagem').focus();
        return false;
    }
     else 
    {

        alert("Email enviado, Obrigado.") 
        document.getElementById('email').value='';
        document.getElementById('mensagem').value='';      
    }

};

;






