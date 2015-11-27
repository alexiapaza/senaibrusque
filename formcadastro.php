<div id="msgCadastroSubmit" class="h3 text-center hidden"></div>

<form role="form" class="form-inline" id='formCadastro'>
    <!-- Gerador de Bootstrap Form 
         http://embed.plnkr.co/ZrnnkFR3Yv9HGQHrRMiW/preview -->
    <!-- Em caso de sucesso na validação: <div class="form-group has-feedback has-success"> -->
    <!-- Em caso de falha na validação: <div class="form-group has-feedback has-error"> -->

    <!-- Erro de validação -->
    <div class="help-block with-errors"></div>
    <!-- Sucessso ou falha no cadastro --> 
    

    <div class="form-group has-feedback">
        <input id="cadastroEmail" type="text" class="form-control" placeholder="seunome@provedor.com.br" size="40px" required/>
        <i class="form-control-feedback glyphicon glyphicon-envelope"></i>
    </div>
    <button id="cadastroSubmit" type="submit" class="btn btn-success">Cadastrar</button>


</form>
