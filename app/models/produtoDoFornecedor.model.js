const sql = require("./db.js");
// constructor
const ProdutoDoFornecedor = function (produtoDoFornecedor) {
  this.idFornecedor = produtoDoFornecedor.idFornecedor;
  this.idProduto = produtoDoFornecedor.idProduto;
  this.preco = produtoDoFornecedor.preco;
  this.mostrar = produtoDoFornecedor.mostrar;
};

ProdutoDoFornecedor.create = (newProdutoDoFornecedor, result) => {
  sql.query("INSERT INTO produtoDoFornecedor SET ?", newProdutoDoFornecedor, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created ProdutoDoFornecedor: ", { ...newProdutoDoFornecedor });
    result(null, { ...newProdutoDoFornecedor });
  });
};

ProdutoDoFornecedor.findById = (idProdutoDoFornecedor, result) => {
  sql.query(`SELECT * FROM produtoDoFornecedor WHERE idProdutoDoFornecedor = '${idProdutoDoFornecedor}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found ProdutoDoFornecedor: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found ProdutoDoFornecedor with the idProdutoDoFornecedor
    result({ kind: "not_found" }, null);
  });
};

ProdutoDoFornecedor.findByIdProduto = (idProduto , result) => {
  sql.query(`SELECT * FROM produtoDoFornecedor WHERE idProduto = ${idProduto}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("produtoDoFornecedor: ", res);
    result(null, res);
  });
};

ProdutoDoFornecedor.getAll = (result) => {
  let query = "SELECT * FROM produtoDoFornecedor";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("ProdutoDoFornecedor: ", res);
    result(null, res);
  });
};

ProdutoDoFornecedor.updateById = (idProdutoDoFornecedor, produtoDoFornecedor, result) => {
  sql.query(
    "UPDATE ProdutoDoFornecedor SET idFornecedor = ? , idProduto = ? , preco = ? , mostrar = ? WHERE idProdutoDoFornecedor = ?",
    [produtoDoFornecedor.idFornecedor, produtoDoFornecedor.idProduto, produtoDoFornecedor.preco, produtoDoFornecedor.mostrar, idProdutoDoFornecedor],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found produtoDoFornecedor with the idProdutoDoFornecedor
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated ProdutoDoFornecedor: ", { ...produtoDoFornecedor.idFornecedor, ...produtoDoFornecedor.idProduto, ...produtoDoFornecedor.preco, ...produtoDoFornecedor.mostrar });
      result(null, { ...produtoDoFornecedor.idFornecedor, ...produtoDoFornecedor.idProduto, ...produtoDoFornecedor.preco, ...produtoDoFornecedor.mostrar });
    }
  );
};

ProdutoDoFornecedor.remove = (idProdutoDoFornecedor, result) => {
  sql.query("DELETE FROM produtoDoFornecedor WHERE idProdutoDoFornecedor = ?", idProdutoDoFornecedor, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found ProdutoDoFornecedor with the idProdutoDoFornecedor
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted produtoDoFornecedor with idProdutoDoFornecedor: ", idProdutoDoFornecedor);
    result(null, res);
  });
};

ProdutoDoFornecedor.removeAll = result => {
  sql.query("DELETE FROM produtoDoFornecedor", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} idProdutoDoFornecedor`);
    result(null, res);
  });
};
module.exports = ProdutoDoFornecedor;