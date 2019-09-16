/* Data Acess Object */

function UsuariosDAO(connection){
  this._connection = connection();
}

UsuariosDAO.prototype.inserirUsuario = function(usuario){
  this._connection.open( function(err, mongoCliente){
    mongoCliente.collection("usuario", function(err, collection){      
      collection.insert(usuario);
      mongoCliente.close();
    });
  });  
}

UsuariosDAO.prototype.autenticar = function(usuario, req, res){
  this._connection.open( function(err, mongoCliente){
    mongoCliente.collection("usuario", function(err, collection){      
      collection.find(usuario).toArray((err, result) => {
         if (result[0]){        
            req.session.autorizado = true;
            req.session.usuario = result[0].usuario;
            req.session.casa = result[0].casa;
         } 

         if (req.session.autorizado) {
           res.redirect("jogo")
         } else {
          res.render("index", {validacao: [{"msg": "Usuário/Senha inválido"}]})

         }


      });
      mongoCliente.close();
    });
  });
}

module.exports = function(){
  return UsuariosDAO;
}