$("#formCadastro").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // Formulário inválido
        cadastroError();
        submitCadastroMSG(false, "Por favor preencha corretamente com o seu e-mail.");
    } else {
        // Tudo azul!
        event.preventDefault();
        submitCadastro();
    }
});

function submitCadastro() {
    // Inicializa variáveis com o conteúdo do formulário
    
    var email = $("#cadastroEmail").val();
    
    console.log("email=" + email);

    /**
     * cadastro.php
     * Cadastro no Banco de dados e envia o e-mail
     */
    $.ajax({
        type: "POST",
        url: "cadastro/cadastro.php",
        data: "email=" + email,
        success: function (text) {
            if (text == "success") {
                console.log("cadastroSuccess");
                cadastroSuccess();
            } else {
                console.log("cadastroSuccess FALHOU. Texto: " + text);
            }
        }
    });
}
function cadastroSuccess() {
    //Limpa o formulário
    $("#formCadastro")[0].reset();
    //Envia mensagem de sucesso!
    $("#formCadastro").addClass('hidden');
    submitCadastroMSG(true, "Email Cadastrado!");
    
}

function submitCadastroMSG(valid, msg) {
    var msgClasses;
    if (valid) {
        msgClasses = "h3 text-center tada animated text-cadastro";
    } else {
        msgClasses = "h3 text-center rubberBand animated text-danger";
    }
    $("#msgCadastroSubmit").removeClass().addClass(msgClasses).text(msg);
}

function cadastroError() {
    $("#formCadastro").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
}

