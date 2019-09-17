module.exports.jogo = (application, req, res) => {
    if (req.session.autorizado) {
        res.render("jogo");
    } else {
        res.render("index", {validacao: [{"msg": "Usuário precisa efetuar login"}]})
    }
}

module.exports.sair = (application, req, res) => {
    req.session.destroy(function(err) {
        res.render("index", {validacao: []})
    })
        
    
}