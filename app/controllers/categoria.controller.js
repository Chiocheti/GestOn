const Categoria = require("../models/categoria.model.js");
// Create and Save a new Categoria
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Categoria
  const categoria = new Categoria({
    idAdm: req.body.idAdm,
    nome: req.body.nome,
  });
  // Save Categoria in the database
  Categoria.create(categoria, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Categoria."
      });
    else res.send(data);
  });
};

// Retrieve all Categoria from the database (with condition).
exports.findAll = (req, res) => {
  Categoria.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Categoria."
      });
    else res.send(data);
  });
};

exports.findOneById = (req, res) => {
  Categoria.findById(req.params.idCategoria, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found categoria with idCategoria ${req.params.idCategoria}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Categoria with idCategoria " + req.params.idCategoria
        });
      }
    } else res.send(data);
  });
};

// Delete a Categoria with the specified idCategoria in the request
exports.delete = (req, res) => {
  Categoria.remove(req.params.idCategoria, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Categoria with idCategoria ${req.params.idCategoria}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Categoria with idCategoria " + req.params.idCategoria
        });
      }
    } else res.send({ message: `Categoria was deleted successfully!` });
  });
};

// Delete all Categoria from the database.
exports.deleteAll = (req, res) => {
  Categoria.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Categoria."
      });
    else res.send({ message: `All Categoria were deleted successfully!` });
  });
};