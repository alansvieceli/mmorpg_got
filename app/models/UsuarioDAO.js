/* Data Acess Object */

function UsuariosDAP(connection){
  this._connection = connection();
}

UsuariosDAP.prototype.inserirUsuario = function(usuario){
  this._connection.open( function(err, mongoCliente){
    mongoCliente.collection("usuario", function(err, obj){      
      console.log(err);
      obj.insert(usuario);
      mongoCliente.close();
    });
  });  
}

module.exports = function(){
  return UsuariosDAP;
}