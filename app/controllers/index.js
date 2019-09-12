module.exports.home = (application, req, res) => {
    res.render("index", {validacao: []});
}

module.exports.autenticar = (application, req, res) => {
   
    var dadosForm = req.body;

    req.assert("usuario", "Usuário não pode ser vazio").notEmpty();
    req.assert("senha", "Senha não pode ser vazio").notEmpty();    

    var erros = req.validationErrors();
    if (erros){        
        res.render("index", {validacao: erros})
        return;
    }

    res.send(dadosForm);

    //res.render("autenticar");
}