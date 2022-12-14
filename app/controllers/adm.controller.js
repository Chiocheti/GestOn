const Adm = require("../models/adm.model");
// Create and Save a new Adm
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Adm
  const adm = new Adm({
    nome: req.body.nome,
    idFuncionario: req.body.idFuncionario,
    telefone: req.body.telefone,
    senha: req.body.senha,
  });
  // Save Adm in the database
  Adm.create(adm, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Adm."
      });
    else res.send(data);
  });
};

// Retrieve all Adm from the database (with condition).
exports.findAll = (req, res) => {
  Adm.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Adm."
      });
    else res.send(data);
  });
};

exports.findOneById = (req, res) => {
  Adm.findById(req.params.idFuncionario, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found adm with idFuncionario ${req.params.idFuncionario}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving adm with idFuncionario " + req.params.idFuncionario
        });
      }
    } else res.send(data);
  });
};

exports.findOneByIdAndSenha = (req, res) => {
  Adm.findByIdAndSenha(req.params.idFuncionario , req.params.senha , (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found adm with idFuncionario ${req.params.idFuncionario} ${req.params.senha}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving adm with idFuncionario " + req.params.idFuncionario + req.params.senha
        });
      }
    } else res.send(data);
  });
};

// Update a Adm identified by the idFuncionario in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Adm.updateById(
    req.params.idFuncionario,
    new Adm(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Adm with idFuncionario ${req.params.idFuncionario}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating adm with idFuncionario " + req.params.idFuncionario
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Adm with the specified idFuncionario in the request
exports.delete = (req, res) => {
  Adm.remove(req.params.idFuncionario, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Adm with idFuncionario ${req.params.idFuncionario}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Adm with idFuncionario " + req.params.idFuncionario
        });
      }
    } else res.send({ message: `Adm was deleted successfully!` });
  });
};

// Delete all Adm from the database.
exports.deleteAll = (req, res) => {
  Adm.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Adm."
      });
    else res.send({ message: `All Adm were deleted successfully!` });
  });
};