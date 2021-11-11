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

var confirmaSenha = function () {
    var cadSenha = document.getElementById('cadSenha')
    var cadConfirmaSenha = document.getElementById('cadConfirmaSenha')

    if(cadSenha != cadConfirmaSenha){

        alert("Confirmação de senha inválida! Tente novamente.")
        document.getElementById('cadConfirmaSenha').focus();
        return false;
    }
    else{
        alert("Usuário cadastrado com Sucesso!")
    }

}


var alteraSenha = function () {

    var trocaSenha = document.getElementById('trocaSenha')
    var confirmaSenha = document.getElementById('confirmaSenha')

    if(trocaSenha != confirmaSenha){
        alert("A nova senha e a confirmação devem ser iguais.")
        document.getElementById('ConfirmaSenha').focus();
        return false;
    }
    else{
        alert("Senha Atualizada!")
        return true;
    }

}

var logar = function(){

    var usuario = document.getElementById('usuario');
    var senha = document.getElementById('senha');

    if(usuario.value != "leandro@gmail.com"){

        alert("Usuário e/ou senha inválidos. Por favor tente novamente");
        document.getElementById('usuario').focus();
        return false;

    }
    if(senha.value != "brasil00"){
        alert("Usuário e/ou senha inválidos. Por favor tente novamente");
        document.getElementById('senha').focus();
        return false;
    }
    else{
        alert("Bem vindo!")          
    }

    window.location.href = "https://www.youtube.com/watch?v=xIQY9u36h84";
}





