const ItemFavoritado = require("../models/itemFavoritado.model.js");
// Create and Save a new ItemFavoritado
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a ItemFavoritado
    const itemFavoritado = new ItemFavoritado({
        idFavorito: req.body.idFavorito,
        idProdutoDoFornecedor: req.body.idProdutoDoFornecedor,
    });
    // Save ItemFavoritado in the database
    ItemFavoritado.create(itemFavoritado, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the ItemFavoritado."
            });
        else res.send(data);
    });
};

// Retrieve all ProdutoNoCarrinho from the database (with condition).
exports.findAll = (req, res) => {
    ItemFavoritado.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ItemFavoritado."
            });
        else res.send(data);
    });
};

// Find a single ItemFavoritado with a IdItemFavoritado
exports.findOneByIdItemFavoritado = (req, res) => {
    ItemFavoritado.findByIdItemFavoritado(req.params.idItemFavoritado, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ItemFavoritado with idItemFavoritado ${req.params.idItemFavoritado}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving ItemFavoritado with IdItemFavoritado " + req.params.idItemFavoritado
                });
            }
        } else res.send(data);
    });
};

// Find a single ProdutoNoCarrinho with a idProdutoDoFornecedor
exports.findAllByIdFavorito = (req, res) => {
    ItemFavoritado.findByIdFavorito(req.params.idFavorito, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ItemFavoritado with idFavorito ${req.params.idFavorito}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving ItemFavoritado with idFavorito " + req.params.idFavorito
                });
            }
        } else res.send(data);
    });
};

// Delete a produtoNoCarrinho with the specified idProdutoNoCarrinho in the request
exports.deleteById = (req, res) => {
    ItemFavoritado.removeById(req.params.idItemFavoritado, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ItemFavoritado with idItemFavoritado ${req.params.idItemFavoritado}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete ItemFavoritado with idItemFavoritado " + req.params.idItemFavoritado
                });
            }
        } else res.send({ message: `ItemFavoritado was deleted successfully!` });
    });
};

// Delete all produtoNoCarrinho with the specified idFornecedor in the request
exports.deleteAllByIdFavorito = (req, res) => {
    ItemFavoritado.removeAllByIdFavorito(req.params.idFavorito, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found ItemFavoritado with idFavorito ${req.params.idFavorito}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete ItemFavoritado with idFavorito " + req.params.idFavorito
                });
            }
        } else res.send({ message: `ItemFavoritado was deleted successfully!` });
    });
};

// Delete all Fornecedores from the database.
exports.deleteAll = (req, res) => {
    ItemFavoritado.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all ItemFavoritado."
            });
        else res.send({ message: `All ItemFavoritado were deleted successfully!` });
    });
};