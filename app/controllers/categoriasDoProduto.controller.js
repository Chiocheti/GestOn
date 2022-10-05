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
        idProduto: req.body.idProduto,
        categoria: req.body.categoria,
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
// Find a single CategoriasDoProduto by a idProduto
exports.findOneByIdProduto = (req, res) => {
    CategoriasDoProduto.findByIdProduto(req.params.idProduto, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found CategoriasDoProduto with idProduto ${req.params.idProduto}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving CategoriasDoProduto with idProduto " + req.params.idProduto
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
                    message: `Not found CategoriasDoProduto with idProduto ${req.params.idCategoria}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving CategoriasDoProduto with idProduto " + req.params.idProduto
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