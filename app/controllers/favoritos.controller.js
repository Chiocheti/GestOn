const Favoritos = require("../models/favoritos.model.js");
// Create and Save a new Fornecedor
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Favoritos
    const favoritos = new Favoritos({
        idConsumidor: req.body.idConsumidor,
    });
    // Save Favoritos in the database
    Favoritos.create(favoritos, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the favoritos."
            });
        else res.send(data);
    });
};

// Retrieve all Favoritos from the database (with condition).
exports.findAll = (req, res) => {
    Favoritos.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Favoritos."
            });
        else res.send(data);
    });
};

// Find a single Favoritos with a idFavorito
exports.findOneById = (req, res) => {
    Favoritos.findById(req.params.idFavorito, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found favoritos with idFavorito ${req.params.idFavorito}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving favoritos with idFavorito " + req.params.idFavorito
                });
            }
        } else res.send(data);
    });
};

// Delete a Favoritos with the specified idFavorito in the request
exports.delete = (req, res) => {
    Favoritos.remove(req.params.idFavorito, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Favoritos with idFavorito ${req.params.idFavorito}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Favoritos with idFavorito " + req.params.idFavorito
                });
            }
        } else res.send({ message: `Favoritos was deleted successfully!` });
    });
};

// Delete all Favoritos from the database.
exports.deleteAll = (req, res) => {
    Favoritos.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Favoritos."
            });
        else res.send({ message: `All Favoritos were deleted successfully!` });
    });
};