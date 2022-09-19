const Produto = require("../models/produto.model.js");
// Create and Save a new Produto
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Produto
  const produto = new Produto({
    nome: req.body.nome,
    descricaoLonga: req.body.descricaoLonga,
    descricaoCurta: req.body.descricaoCurta,
    linkImg: req.body.linkImg,
    marca : req.body.marca
  });

  // Save Produto in the database
  Produto.create(produto, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Produto."
      });
    else res.send(data);
  });
};

// Retrieve all Produto from the database (with condition).
exports.findAll = (req, res) => {
  Produto.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving produtos."
      });
    else res.send(data);
  });
};

// Find a single Produto with a idProduto
exports.findOneById = (req, res) => {
  Produto.findById(req.params.idProduto, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Produto with idProduto ${req.params.idProduto}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Produto with idProduto " + req.params.idProduto
        });
      }
    } else res.send(data);
  });
};

// Find all Produto with a nome
exports.getEveryLikeName = (req, res) => {
  Produto.getAllLikeName(req.params.nome, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Produto with nome ${req.params.nome}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Produto with nome " + req.params.nome
        });
      }
    } else res.send(data);
  });
};

// Update a Produto identified by the idProduto in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Produto.updateById(
    req.params.idProduto,
    new Produto(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Produto with idProduto ${req.params.idProduto}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Produto with idProduto " + req.params.idProduto
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Produto with the specified idProduto in the request
exports.delete = (req, res) => {
  Produto.remove(req.params.idProduto, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Produto with idProduto ${req.params.idProduto}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Produto with idProduto " + req.params.idProduto
        });
      }
    } else res.send({ message: `Produto was deleted successfully!` });
  });
};

// Delete all Produto from the database.
exports.deleteAll = (req, res) => {
  Produto.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Produto."
      });
    else res.send({ message: `All Produto were deleted successfully!` });
  });
};