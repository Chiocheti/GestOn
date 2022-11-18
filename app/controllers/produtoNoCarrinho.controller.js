const ProdutoNoCarrinho = require("../models/produtoNoCarrinho.model.js");
// Create and Save a new Fornecedor
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a ProdutoNoCarrinho
    const produtoNoCarrinho = new ProdutoNoCarrinho({
        idProduto: req.body.idProduto,
        idCarrinho: req.body.idCarrinho,
        qtt: req.body.qtt,
    });
    // Save ProdutoNoCarrinho in the database
    ProdutoNoCarrinho.create(produtoNoCarrinho, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the produtoNoCarrinho."
            });
        else res.send(data);
    });
};

// Retrieve all ProdutoNoCarrinho from the database (with condition).
exports.findAll = (req, res) => {
    ProdutoNoCarrinho.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ProdutoNoCarrinho."
            });
        else res.send(data);
    });
};

// Find a single ProdutoNoCarrinho with a idProdutoNoCarrinho
exports.findOneByIdProdutoNoCarrinho = (req, res) => {
    ProdutoNoCarrinho.findByIdProdutoNoCarrinho(req.params.idProdutoNoCarrinho, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ProdutoNoCarrinho with idProdutoNoCarrinho ${req.params.idProdutoNoCarrinho}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving ProdutoNoCarrinho with idProdutoNoCarrinho " + req.params.idProdutoNoCarrinho
                });
            }
        } else res.send(data);
    });
};

// Find a single ProdutoNoCarrinho with a idProduto
exports.findAllByIdProduto = (req, res) => {
    ProdutoNoCarrinho.findByIdProduto(req.params.idProduto, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ProdutoNoCarrinho with idProduto ${req.params.idProduto}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving ProdutoNoCarrinho with idProduto " + req.params.idProduto
                });
            }
        } else res.send(data);
    });
};

// Find a single ProdutoNoCarrinho with a idCarrinho
exports.findAllByIdCarrinho = (req, res) => {
    ProdutoNoCarrinho.findByIdCarrinho(req.params.idCarrinho, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ProdutoNoCarrinho with idProduto ${req.params.idCarrinho}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving ProdutoNoCarrinho with idCarrinho " + req.params.idCarrinho
                });
            }
        } else res.send(data);
    });
};

// Update a ProdutoNoCarrinho identified by the idProdutoNoCarrinho in the request
exports.updateTheQttById = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    ProdutoNoCarrinho.updateQttById(
        req.params.idProdutoNoCarrinho,
        new ProdutoNoCarrinho(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found ProdutoNoCarrinho with idProdutoNoCarrinho ${req.params.idProdutoNoCarrinho}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating ProdutoNoCarrinho with idProdutoNoCarrinho " + req.params.idProdutoNoCarrinho
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a produtoNoCarrinho with the specified idProdutoNoCarrinho in the request
exports.deleteById = (req, res) => {
    ProdutoNoCarrinho.removeById(req.params.idProdutoNoCarrinho, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ProdutoNoCarrinho with idProdutoNoCarrinho ${req.params.idProdutoNoCarrinho}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete produtoNoCarrinho with idProdutoNoCarrinho " + req.params.idProdutoNoCarrinho
                });
            }
        } else res.send({ message: `produtoNoCarrinho was deleted successfully!` });
    });
};

// Delete all produtoNoCarrinho with the specified idFornecedor in the request
exports.deleteAllByIdCarrinho = (req, res) => {
    ProdutoNoCarrinho.removeAllByIdCarrinho(req.params.idCarrinho, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ProdutoNoCarrinho with idCarrinho ${req.params.idCarrinho}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete produtoNoCarrinho with idCarrinho " + req.params.idCarrinho
                });
            }
        } else res.send({ message: `produtoNoCarrinho was deleted successfully!` });
    });
};

// Delete all produtoNoCarrinho with the specified idFornecedor in the request
exports.deleteThis = (req, res) => {
    ProdutoNoCarrinho.removeThis(req.params.idProduto , req.params.idCarrinho, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ProdutoNoCarrinho with idProduto ${req.params.idProduto},idCarrinho ${req.params.idCarrinho}.`
                });
            } else {
                res.status(500).send({
                    message: `Not found ProdutoNoCarrinho with idProduto ${req.params.idProduto},idCarrinho ${req.params.idCarrinho}`
                });
            }
        } else res.send({ message: `produtoNoCarrinho was deleted successfully!` });
    });
};

// Delete all Fornecedores from the database.
exports.deleteAll = (req, res) => {
    ProdutoNoCarrinho.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all ProdutoNoCarrinho."
            });
        else res.send({ message: `All ProdutoNoCarrinho were deleted successfully!` });
    });
};