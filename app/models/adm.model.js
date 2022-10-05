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
        console.log("created adm: ", { idAdm: res.insertId , ...newAdm });
        result(null, { ...newAdm });
    });
};

Adm.findById = (idAdm, result) => {
    sql.query(`SELECT * FROM adm WHERE idAdm = '${idAdm}'`, (err, res) => {
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
        // not found adm with the idAdm
        result({ kind: "not_found" }, null);
    });
};

Adm.findByIdFuncionario = (idFuncionario, result) => {
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
        // not found adm with the idAdm
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

Adm.updateById = (idAdm, adm, result) => {
    sql.query(
        "UPDATE adm SET nome = ? , idFuncionario = ? , telefone = ? , senha = ? WHERE idAdm = ?",
        [adm.nome, adm.idFuncionario, adm.telefone, adm.senha, idAdm],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows == 0) {
                // not found Adm with the idAdm
                result({ kind: "not_found" }, null);
                return;
            }
            console.log("updated Adm: ", { ...adm.nome,...adm.idFuncionario , ...adm.telefone, ...adm.senha });
            result(null, { ...adm.nome,...adm.idFuncionario ,...adm.telefone, ...adm.senha });
        }
    );
};

Adm.remove = (idAdm, result) => {
    sql.query("DELETE FROM adm WHERE idAdm = ?", idAdm, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows == 0) {
            // not found Adm with the id
            result({ kind: "not_found" }, null);
            return;
        }
        console.log("deleted adm with idAdm: ", idAdm);
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