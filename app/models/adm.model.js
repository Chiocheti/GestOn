const sql = require("./db.js");
// constructor
const Adm = function (adm) {
    this.nome = adm.nome;
    this.idFuncionario = adm.idFuncionario;
    this.telefone = adm.telefone;
    this.senha = adm.senha;
};

Adm.create = (newAdm, result) => {
    sql.query("INSERT INTO adm SET ?", newAdm, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created adm: ", { ...newAdm });
        result(null, { ...newAdm });
    });
};

Adm.findById = (idFuncionario, result) => {
    sql.query(`SELECT * FROM adm WHERE idFuncionario = '${idFuncionario}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found adm: ", res[0]);
            result(null, res[0]);
            return;
        }
        // not found adm with the idFuncionario
        result({ kind: "not_found" }, null);
    });
};

Adm.getAll = (result) => {
    let query = "SELECT * FROM adm";
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("adm: ", res);
        result(null, res);
    });
};

Adm.updateById = (idFuncionario, adm, result) => {
    sql.query(
        "UPDATE adm SET nome = ? , telefone = ? , senha = ? WHERE idFuncionario = ?",
        [adm.nome, adm.telefone, adm.senha, idFuncionario],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found Adm with the idFuncionario
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated Adm: ", { ...adm.nome, ...adm.telefone, ...adm.senha });
            result(null, { ...adm.nome , ...adm.telefone, ...adm.senha });
        }
    );
};

Adm.remove = (idFuncionario, result) => {
    sql.query("DELETE FROM adm WHERE idFuncionario = ?", idFuncionario, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Adm with the idFuncionario
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted adm with idFuncionario: ", idFuncionario);
        result(null, res);
    });
};

Adm.removeAll = result => {
    sql.query("DELETE FROM adm", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log(`deleted ${res.affectedRows} adm`);
        result(null, res);
    });
};
module.exports = Adm;