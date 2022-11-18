const CategoriasDoProduto = require("../models/categoriasDoProduto.model.js");
// Create and Save a new CategoriasDoProduto
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a CategoriasDoProduto
    const categoriasDoProduto = new CategoriasDoProduto({
        idProdutoDoFornecedor: req.body.idProdutoDoFornecedor,
        idCategoria: req.body.idCategoria,
    });

    // Save CategoriasDoProduto in the database
    CategoriasDoProduto.create(categoriasDoProduto, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the categoriasDoProduto."
            });
        else res.send(data);
    });
};

// Retrieve all CategoriasDoProduto from the database (with condition).
exports.findAll = (req, res) => {
    CategoriasDoProduto.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving CategoriasDoProduto."
            });
        else res.send(data);
    });
};

// Find a single CategoriasDoProduto with a idCategoriasDoProduto
exports.findOneById = (req, res) => {
    CategoriasDoProduto.findById(req.params.idCategoriasDoProduto, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found CategoriasDoProduto with idCategoriasDoProduto ${req.params.idCategoriasDoProduto}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving CategoriasDoProduto with idCategoriasDoProduto " + req.params.idCategoriasDoProduto
                });
            }
        } else res.send(data);
    });
};
// Find a single CategoriasDoProduto by a idProdutoDoFornecedor
exports.findOneByIdProduto = (req, res) => {
    CategoriasDoProduto.findByIdProduto(req.params.idProdutoDoFornecedor, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found CategoriasDoProduto with idProdutoDoFornecedor ${req.params.idProdutoDoFornecedor}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving CategoriasDoProduto with idProdutoDoFornecedor " + req.params.idProdutoDoFornecedor
                });
            }
        } else res.send(data);
    });
};

// Find a single CategoriasDoProduto by a idProdutoDoFornecedor
exports.CountByIdProduto = (req, res) => {
    CategoriasDoProduto.CountByIdProduto(req.params.idProdutoDoFornecedor, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found CategoriasDoProduto with idProdutoDoFornecedor ${req.params.idProdutoDoFornecedor}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving CategoriasDoProduto with idProdutoDoFornecedor " + req.params.idProdutoDoFornecedor
                });
            }
        } else res.send(data);
    });
};
// Find a single CategoriasDoProduto by a idProduto
exports.findOneByIdCategoria = (req, res) => {
    CategoriasDoProduto.findByIdCategoria(req.params.idCategoria, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found CategoriasDoProduto with idCategoria ${req.params.idCategoria}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving CategoriasDoProduto with idCategoria " + req.params.idCategoria
                });
            }
        } else res.send(data);
    });
};

// Delete a CategoriasDoProduto with the specified CategoriasDoProduto in the request
exports.delete = (req, res) => {
    CategoriasDoProduto.remove(req.params.idCategoriasDoProduto, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found CategoriasDoProduto with idCategoriasDoProduto ${req.params.idCategoriasDoProduto}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete CategoriasDoProduto with idCategoriasDoProduto" + req.params.idCategoriasDoProduto
                });
            }
        } else res.send({ message: `CategoriasDoProduto was deleted successfully!` });
    });
};

// Delete a CategoriasDoProduto with the specified CategoriasDoProduto in the request
exports.deleteIdCategoria = (req, res) => {
    CategoriasDoProduto.removeFromIdCategoria(req.params.idCategoria, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found CategoriasDoProduto with idCategoria ${req.params.idCategoria}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete CategoriasDoProduto with idCategoria" + req.params.idCategoria
                });
            }
        } else res.send({ message: `CategoriasDoProduto was deleted successfully!` });
    });
};

// Delete all CategoriasDoProduto from the database.
exports.deleteAll = (req, res) => {
    CategoriasDoProduto.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all CategoriasDoProduto."
            });
        else res.send({ message: `All CategoriasDoProduto were deleted successfully!` });
    });
};