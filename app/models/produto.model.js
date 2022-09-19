const sql = require("./db.js");
// constructor
const Produto = function (produto) {
  this.nome = produto.nome;
  this.descricaoLonga = produto.descricaoLonga;
  this.descricaoCurta = produto.descricaoCurta;
  this.linkImg = produto.linkImg;  
  this.marca = produto.marca;
};

Produto.create = (newProduto, result) => {
  sql.query("INSERT INTO produto SET ?", newProduto, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created Produto: ", { ...newProduto });
    result(null, { ...newProduto });
  });
};

Produto.findById = (idProduto, result) => {
  sql.query(`SELECT * FROM produto WHERE idProduto = '${idProduto}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found produto: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Produto with the idProduto
    result({ kind: "not_found" }, null);
  });
};

Produto.getAllLikeName = (nome , result) => {
  sql.query(`SELECT * FROM produto WHERE nome like '%${nome}%'` , (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Produtos: ", res);
    result(null, res);
  });
};

Produto.getAll = (result) => {
  let query = "SELECT * FROM produto";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Produto: ", res);
    result(null, res);
  });
};

Produto.updateById = (idProduto, produto, result) => {
  sql.query(
    "UPDATE produto SET nome = ? , descricaoCurta = ? , descricaoLonga = ? , linkImg = ? , marca = ?  WHERE idProduto = ?",
    [produto.nome, produto.descricaoCurta, produto.descricaoLonga, produto.linkImg, produto.marca, idProduto],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found produto with the idProduto
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated produto: ", { ...produto.nome, ...produto.descricaoCurta, ...produto.descricaoLonga, ...produto.linkImg, ...produto.marca });
      result(null, { ...produto.nome, ...produto.descricaoCurta, ...produto.descricaoLonga, ...produto.linkImg, ...produto.marca });
    }
  );
};

Produto.remove = (idProduto, result) => {
  sql.query("DELETE FROM produto WHERE idProduto = ?", idProduto, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Produto with the idProduto
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted produto with idProduto: ", idProduto);
    result(null, res);
  });
};

Produto.removeAll = result => {
  sql.query("DELETE FROM produto", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} produto`);
    result(null, res);
  });
};
module.exports = Produto;