const sql = require("./db.js");
// constructor
const Carrinho = function (carrinho) {
    this.idConsumidor = carrinho.idConsumidor;
    this.precoTotal = carrinho.precoTotal;
    this.horaCotacao = carrinho.horaCotacao;
    this.horaFechamentoDoCarrinho = carrinho.horaFechamentoDoCarrinho;
};

Carrinho.create = (newCarrinho, result) => {
    sql.query("INSERT INTO carrinho SET ?", newCarrinho, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("create Carrinho: ", { ...newCarrinho });
        result(null, { ...newCarrinho });
    });
};

Carrinho.findByIdCarrinho = (idCarrinho, result) => {
    sql.query(`SELECT * FROM carrinho WHERE idCarrinho = '${idCarrinho}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found Carrinho: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found Carrinho with the idCarrinho
        result({ kind: "not_found" }, null);
    });
};

Carrinho.findByIdConsumidor = (idConsumidor, result) => {
    sql.query(`SELECT * FROM carrinho WHERE idConsumidor = ${idConsumidor}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Carrinho: ", res);
        result(null, res);
    });
};

Carrinho.getAll = (result) => {
    let query = "SELECT * FROM carrinho";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Carrinho: ", res);
        result(null, res);
    });
};

Carrinho.updatePrecoTotalById = (idCarrinho, carrinho, result) => {
    sql.query(
        "UPDATE carrinho SET precoTotal = ? WHERE idCarrinho = ?",
        [carrinho.precoTotal, idCarrinho],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found carrinho with the idCarrinho
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated Carrinho: ", { ...carrinho.precoTotal });
            result(null, { ...carrinho.precoTotal });
        }
    );
};

Carrinho.updateHoraCotacaoById = (idCarrinho, result) => {
    var date = new Date();
    var formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:00`;
    console.log("Hora Formatada => |" + formatedDate + "|");
    sql.query(
        `UPDATE carrinho SET horaCotacao = '${formatedDate}' WHERE idCarrinho = ${idCarrinho}`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found carrinho with the idCarrinho
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated Carrinho: ", { ...formatedDate });
            result(null, { ...formatedDate });
        }
    );
};

Carrinho.updateHoraFechamentoDoCarrinhoById = (idCarrinho, result) => {
    var date = new Date();
    var formatedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:00`;
    console.log(formatedDate);
    sql.query(
        `UPDATE carrinho SET horaFechamentoDoCarrinho = '${formatedDate}' WHERE idCarrinho = ${idCarrinho}`,
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found carrinho with the idCarrinho
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated Carrinho: ", { ...formatedDate });
            result(null, { ...formatedDate });
        }
    );
};

Carrinho.removeById = (idCarrinho, result) => {
    sql.query("DELETE FROM carrinho WHERE idCarrinho = ?", idCarrinho, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found carrinho with the idCarrinho
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted carrinho with idCarrinho: ", idCarrinho);
        result(null, res);
    });
};

Carrinho.removeAll = result => {
    sql.query("DELETE FROM carrinho", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} carrinho`);
        result(null, res);
    });
};
module.exports = Carrinho; 