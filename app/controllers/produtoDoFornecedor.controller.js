const ProdutoDoFornecedor = require("../models/produtoDoFornecedor.model.js");
// Create and Save a new ProdutoDoFornecedor
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a produtoDoFornecedor
    const produtoDoFornecedor = new ProdutoDoFornecedor({
        idFornecedor: req.body.idFornecedor,
        idProduto: req.body.idProduto,
        preco: req.body.preco,
        mostrar: req.body.mostrar
    });

    // Save idProdutoDoFornecedor in the database
    ProdutoDoFornecedor.create(produtoDoFornecedor, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the produtoDoFornecedor."
            });
        else res.send(data);
    });
};

// Retrieve all ProdutoDoFornecedor from the database (with condition).
exports.findAll = (req, res) => {
    ProdutoDoFornecedor.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ProdutoDoFornecedor."
            });
        else res.send(data);
    });
};

// Find a single produtoDoFornecedor with a idProdutoDoFornecedor
exports.findOneById = (req, res) => {
    ProdutoDoFornecedor.findById(req.params.idProdutoDoFornecedor, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ProdutoDoFornecedor with idProdutoDoFornecedor ${req.params.idProdutoDoFornecedor}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving ProdutoDoFornecedor with idProdutoDoFornecedor " + req.params.idProdutoDoFornecedor
                });
            }
        } else res.send(data);
    });
};
// Find a single ProdutoDoFornecedor by a idProduto
exports.findOneByIdProduto = (req, res) => {
    ProdutoDoFornecedor.findByIdProduto(req.params.idProduto, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ProdutoDoFornecedor with idProduto ${req.params.idProduto}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving ProdutoDoFornecedor with idProduto " + req.params.idProduto
                });
            }
        } else res.send(data);
    });
};

// Find a single ProdutoDoFornecedor by a idFornecedor
exports.findOneByIdFornecedor = (req, res) => {
    ProdutoDoFornecedor.findByIdFornecedor(req.params.idFornecedor, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ProdutoDoFornecedor with idFornecedor ${req.params.idFornecedor}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving ProdutoDoFornecedor with idFornecedor " + req.params.idFornecedor
                });
            }
        } else res.send(data);
    });
};

// Find something from ProdutoDoFornecedor by a idFornecedor
exports.findSomethingFromIdFornecedor = (req, res) => {
    ProdutoDoFornecedor.findThisSomethingFromIdFornecedor(req.params.idFornecedor, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found list and produto ProdutoDoFornecedor with idFornecedor ${req.params.idFornecedor}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving list and produto ProdutoDoFornecedor with idFornecedor: " + req.params.idFornecedor
                });
            }
        } else res.send(data);
    });
};

// Update a ProdutoDoFornecedor identified by the idProdutoDoFornecedor in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    ProdutoDoFornecedor.updateById(
        req.params.idProdutoDoFornecedor,
        new Fornecedor(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found ProdutoDoFornecedor with idProdutoDoFornecedor ${req.params.idProdutoDoFornecedor}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating ProdutoDoFornecedor with idProdutoDoFornecedor " + req.params.idProdutoDoFornecedor
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a ProdutoDoFornecedor with the specified idProdutoDoFornecedor in the request
exports.delete = (req, res) => {
    ProdutoDoFornecedor.remove(req.params.idProdutoDoFornecedor, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ProdutoDoFornecedor with idProdutoDoFornecedor ${req.params.idProdutoDoFornecedor}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete ProdutoDoFornecedor with idProdutoDoFornecedor " + req.params.idProdutoDoFornecedor
                });
            }
        } else res.send({ message: `ProdutoDoFornecedor was deleted successfully!` });
    });
};

// Delete all Fornecedores from the database.
exports.deleteAll = (req, res) => {
    ProdutoDoFornecedor.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all produtoDoFornecedor."
            });
        else res.send({ message: `All ProdutoDoFornecedor were deleted successfully!` });
    });
};