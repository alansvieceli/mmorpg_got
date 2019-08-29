module.exports.cadastro = (application, req, res) => {
    res.render("cadastro", {validacao: {}, dadosForm: {}});
}

module.exports.cadastrar = (application, req, res) => {
    var dadosForm = req.body;

    req.assert("nome", "Nome não pode ser vazio").notEmpty();
    req.assert("usuario", "Usuario não pode ser vazio").notEmpty();
    req.assert("senha", "Senha não pode ser vazio").notEmpty();
    req.assert("casa", "Casa não pode ser vazio").notEmpty();

    var erros = req.validationErrors();
    if (erros){        
        console.log(dadosForm)
        res.render("cadastro", {validacao: erros, dadosForm: dadosForm})
        return;
    }

    var connection = application.config.dbConnection;
    var usuarioDAO = new application.app.models.UsuarioDAO(connection);    
    usuarioDAO.inserirUsuario(dadosForm);
    res.send("sem erros");
}