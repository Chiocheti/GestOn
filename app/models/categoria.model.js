const sql = require("./db.js");
// constructor
const Categoria = function (categoria) {
    this.idFuncionario = categoria.idFuncionario;
    this.nome = categoria.nome;
};

Categoria.create = (newCategoria, result) => {
    sql.query("INSERT INTO categoria SET ?", newCategoria, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created Categoria: ", { ...newCategoria });
        result(null, { ...newCategoria });
    });
};

Categoria.findById = (idCategoria, result) => {
    sql.query(`SELECT * FROM categoria WHERE idCategoria = '${idCategoria}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found Categoria: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found Categoria with the idCategoria
        result({ kind: "not_found" }, null);
    });
};

Categoria.getAll = (result) => {
    let query = "SELECT * FROM categoria";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Categoria: ", res);
        result(null, res);
    });
};

Categoria.remove = (idCategoria, result) => {
    sql.query("DELETE FROM categoria WHERE idCategoria = ?", idCategoria, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Categoria with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted Categoria with idCategoria: ", idCategoria);
        result(null, res);
    });
};

Categoria.removeAll = result => {
    sql.query("DELETE FROM categoria", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} Categoria`);
        result(null, res);
    });
};
module.exports = Categoria;