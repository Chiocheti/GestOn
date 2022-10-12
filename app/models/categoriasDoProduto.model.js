const sql = require("./db.js");
// constructor
const CategoriasDoProduto = function (categoriasDoProduto) {
  this.idProduto = categoriasDoProduto.idProduto;
  this.idCategoria = categoriasDoProduto.idCategoria;
  };

  CategoriasDoProduto.create = (newCategoriasDoProduto, result) => {
  sql.query("INSERT INTO categoriasDoProduto SET ?", newCategoriasDoProduto, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created categoriasDoProduto: ", { ...newCategoriasDoProduto });
    result(null, { ...newCategoriasDoProduto });
  });
};

CategoriasDoProduto.findById = (idCategoriasDoProduto, result) => {
  sql.query(`SELECT * FROM categoriasDoProduto WHERE idCategoriasDoProduto = '${idCategoriasDoProduto}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found CategoriasDoProduto: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found CategoriasDoProduto with the idCategoriasDoProduto
    result({ kind: "not_found" }, null);
  });
};

CategoriasDoProduto.findByIdProduto = (idProduto , result) => {
  sql.query(`SELECT * FROM categoriasDoProduto WHERE idProduto = ${idProduto}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("categoriasDoProduto: ", res);
    result(null, res);
  });
};

CategoriasDoProduto.findByIdCategoria = (idCategoria , result) => {
  sql.query(`SELECT * FROM categoriasDoProduto WHERE idCategoria = ${idCategoria}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("categoriasDoProduto: ", res);
    result(null, res);
  });
};

CategoriasDoProduto.getAll = (result) => {
  let query = "SELECT * FROM categoriasDoProduto";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("CategoriasDoProduto: ", res);
    result(null, res);
  });
};

CategoriasDoProduto.remove = (idCategoriasDoProduto, result) => {
  sql.query("DELETE FROM categoriasDoProduto WHERE idCategoriasDoProduto = ?", idCategoriasDoProduto, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found CategoriasDoProduto with the idCategoriasDoProduto
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted CategoriasDoProduto with idCategoriasDoProduto: ", idCategoriasDoProduto);
    result(null, res);
  });
};

CategoriasDoProduto.removeFromIdCategoria = (idCategoria, result) => {
  sql.query("DELETE FROM categoriasDoProduto WHERE idCategoria = ?", idCategoria, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found CategoriasDoProduto with the idCategoria
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted CategoriasDoProduto with idCategorias: ", idCategorias);
    result(null, res);
  });
};

CategoriasDoProduto.removeAll = result => {
  sql.query("DELETE FROM categoriasDoProduto", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} idCategorias`);
    result(null, res);
  });
};
module.exports = CategoriasDoProduto;