module.exports.jogo = (application, req, res) => {
    if (req.session.autorizado) {
        res.render("jogo");
    } else {
        res.render("index", {validacao: [{"msg": "Usuário precisa efetuar login"}]})
    }
}