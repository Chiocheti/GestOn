const sql = require("./db.js");
// constructor
const Favoritos = function (favoritos) {
  this.idConsumidor = favoritos.idConsumidor;
};

Favoritos.create = (newfavoritos, result) => {
  sql.query("INSERT INTO favoritos SET ?", newfavoritos, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created favoritos: ", { ...newfavoritos });
    result(null, { ...newfavoritos });
  });
};

Favoritos.findById = (idFavorito, result) => {
  sql.query(`SELECT * FROM favoritos WHERE idFavorito = '${idFavorito}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found favoritos: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Favoritos with the idFavorito
    result({ kind: "not_found" }, null);
  });
};

Favoritos.getAll = (result) => {
  let query = "SELECT * FROM favoritos";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Favoritos: ", res);
    result(null, res);
  });
};

Favoritos.remove = (idFavorito, result) => {
  sql.query("DELETE FROM favoritos WHERE idFavorito = ?", idFavorito, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Favoritos with the idFavorito
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted Favoritos with idFavorito: ", idFavorito);
    result(null, res);
  });
};

Favoritos.removeAll = result => {
  sql.query("DELETE FROM favoritos", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} idFavorito`);
    result(null, res);
  });
};
module.exports = Favoritos;