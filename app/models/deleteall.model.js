const sql = require("./db.js");
// constructor
const Usuario = function (usuario) {
  this.email = usuario.email;
  this.cadastro = usuario.cadastro;
};

Usuario.removeAll = result => {
  sql.query("DELETE FROM itemFavoritado, favoritos, produtoNoCarrinho, produtoDoFornecedor, produto, carrinho, consumidor, fornecedor, endereco, usuario", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} usuarios`);
    result(null, res);
  });
};
module.exports = Usuario;