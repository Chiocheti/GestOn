const sql = require("./db.js");
// constructor
const ProdutoNoCarrinho = function (produtoNoCarrinho) {
    this.idProduto = produtoNoCarrinho.idProduto;
    this.idCarrinho = produtoNoCarrinho.idCarrinho;
    this.qtt = produtoNoCarrinho.qtt;
};

ProdutoNoCarrinho.create = (newProdutoNoCarrinho, result) => {
    sql.query("INSERT INTO produtoNoCarrinho SET ?", newProdutoNoCarrinho, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created ProdutoNoCarrinho: ", { ...newProdutoNoCarrinho });
        result(null, { ...newProdutoNoCarrinho });
    });
};

ProdutoNoCarrinho.findByIdProdutoNoCarrinho = (idProdutoNoCarrinho, result) => {
    sql.query("SELECT * FROM produtoNoCarrinho WHERE idProdutoNoCarrinho = ? ", idProdutoNoCarrinho, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("idProdutoNoCarrinho: ", res);
        result(null, res);
    });
};

ProdutoNoCarrinho.findByIdProduto = (idProduto, result) => {
    sql.query(`SELECT * FROM produtoNoCarrinho WHERE idProduto = ${idProduto}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("produtoNoCarrinho: ", res);
        result(null, res);
    });
};

ProdutoNoCarrinho.findByIdCarrinho = (idCarrinho, result) => {
    sql.query(`SELECT * FROM produtoNoCarrinho WHERE idCarrinho = '${idCarrinho}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("produtoNoCarrinho: ", res);
        result(null, res);
    });
};

ProdutoNoCarrinho.getAll = (result) => {
    let query = "SELECT * FROM produtoNoCarrinho";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("ProdutoNoCarrinho: ", res);
        result(null, res);
    });
};

ProdutoNoCarrinho.updateQttById = (idProdutoNoCarrinho, produtoNoCarrinho, result) => {
    sql.query(
        `UPDATE produtoNoCarrinho SET qtt = ? WHERE idProdutoNoCarrinho = ?`,
        [produtoNoCarrinho.qtt , idProdutoNoCarrinho],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found produtoNoCarrinho with the idProdutoNoCarrinho
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated produtoNoCarrinho: ", { ...produtoNoCarrinho.qtt });
            result(null, { ...produtoNoCarrinho.qtt });
        }
    );
};

ProdutoNoCarrinho.removeById = (idProdutoNoCarrinho, result) => {
    sql.query("DELETE FROM produtoNoCarrinho WHERE idProdutoNoCarrinho = ?", idProdutoNoCarrinho, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found produtoNoCarrinho with the idProdutoNoCarrinho
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted ProdutoNoCarrinho with idProdutoNoCarrinho: ", idProdutoNoCarrinho);
        result(null, res);
    });
};

ProdutoNoCarrinho.removeThis = (idProduto , idCarrinho, result) => {
    sql.query(`DELETE FROM produtoNoCarrinho WHERE idCarrinho = ${idCarrinho} and idProduto = ${idProduto};`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found produtoNoCarrinho with the idProdutoNoCarrinho
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted ProdutoNoCarrinho with idCarrinho: ", idCarrinho , "and idProduto: ", idProduto);
        result(null, res);
    });
};

ProdutoNoCarrinho.removeAllByIdCarrinho = (idCarrinho, result) => {
    sql.query("DELETE FROM produtoNoCarrinho WHERE idCarrinho = ?", idCarrinho, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found produtoNoCarrinho with the idCarrinho
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted ProdutoNoCarrinho with idCarrinho: ", idCarrinho);
        result(null, res);
    });
};

ProdutoNoCarrinho.removeAll = result => {
    sql.query("DELETE FROM produtoNoCarrinho", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} ProdutoNoCarrinho`);
        result(null, res);
    });
};
module.exports = ProdutoNoCarrinho;