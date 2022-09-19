const sql = require("./db.js");
// constructor
const ItemFavoritado = function (itemFavoritado) {
    this.idFavorito = itemFavoritado.idFavorito;
    this.idProdutoDoFornecedor = itemFavoritado.idProdutoDoFornecedor;
};

ItemFavoritado.create = (newItemFavoritado, result) => {
    sql.query("INSERT INTO itemFavoritado SET ?", newItemFavoritado, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created ItemFavoritado: ", { ...newItemFavoritado });
        result(null, { ...newItemFavoritado });
    });
};

ItemFavoritado.findByIdItemFavoritado = (idItemFavoritado, result) => {
    sql.query("SELECT * FROM itemFavoritado WHERE idItemFavoritado = ? ", idItemFavoritado, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("itemFavoritado: ", res);
        result(null, res);
    });
};

ItemFavoritado.findByIdFavorito = (idFavorito, result) => {
    sql.query(`SELECT * FROM itemFavoritado WHERE idFavorito = ${idFavorito}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("itemFavoritado: ", res);
        result(null, res);
    });
};

ItemFavoritado.getAll = (result) => {
    let query = "SELECT * FROM itemFavoritado";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("itemFavoritado: ", res);
        result(null, res);
    });
};

ItemFavoritado.removeById = (idItemFavoritado, result) => {
    sql.query("DELETE FROM itemFavoritado WHERE idItemFavoritado = ?", idItemFavoritado, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found itemFavoritado with the idItemFavoritado
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted ItemFavoritado with idItemFavoritado: ", idItemFavoritado);
        result(null, res);
    });
};

ItemFavoritado.removeAllByIdFavorito = (idFavorito, result) => {
    sql.query("DELETE FROM itemFavoritado WHERE idFavorito = ?", idFavorito, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found itemFavoritado with the idFavorito
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted itemFavoritado with idFavorito: ", idFavorito);
        result(null, res);
    });
};

ItemFavoritado.removeAll = result => {
    sql.query("DELETE FROM itemFavoritado", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} ItemFavoritado`);
        result(null, res);
    });
};
module.exports = ItemFavoritado;