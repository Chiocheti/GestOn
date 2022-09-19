const Carrinho = require("../models/carrinho.model.js");
// Create and Save a new Carrinho
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    // Create a Carrinho
    const carrinho = new Carrinho({
        idConsumidor : req.body.idConsumidor,
        precoTotal : req.body.precoTotal,
        horaCotacao : req.body.horaCotacao,
        horaFechamentoDoCarrinho : req.body.horaFechamentoDoCarrinho,
    });

    // Save Carrinho in the database
    Carrinho.create(carrinho, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the carrinho."
            });
        else res.send(data);
    });
};

// Retrieve all carrinho from the database (with condition).
exports.findAll = (req, res) => {
    Carrinho.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Carrinho."
            });
        else res.send(data);
    });
};

// Find a single carrinho with a idCarrinho
exports.findOneByIdCarrinho = (req, res) => {
    Carrinho.findByIdCarrinho(req.params.idCarrinho, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Carrinho with idCarrinho ${req.params.carrinho}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Carrinho with idCarrinho " + req.params.idCarrinho
                });
            }
        } else res.send(data);
    });
};
// Find a single Carrinho by a IdConsumidor
exports.findOneByIdConsumidor = (req, res) => {
    Carrinho.findByIdConsumidor(req.params.idConsumidor, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Carrinho with idConsumidor ${req.params.idConsumidor}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving carrinho with idConsumidor " + req.params.idConsumidor
                });
            }
        } else res.send(data);
    });
};

// Update a carrinho identified by the idCarrinho in the request
exports.updatePTById = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    console.log(req.body);
    Carrinho.updatePrecoTotalById(
        req.params.idCarrinho,
        new Carrinho(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Carrinho with idCarrinho ${req.params.idCarrinho}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Carrinho with idCarrinho " + req.params.idCarrinho
                    });
                }
            } else res.send(data);
        }
    );
};

// Update a carrinho identified by the idCarrinho in the request
exports.updateHCById = (req, res) => {
    Carrinho.updateHoraCotacaoById(
        req.params.idCarrinho,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Carrinho with idCarrinho ${req.params.idCarrinho}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Carrinho with idCarrinho " + req.params.idCarrinho
                    });
                }
            } else res.send(data);
        }
    );
};

// Update a carrinho identified by the idCarrinho in the request
exports.updateHFCById = (req, res) => {
    Carrinho.updateHoraFechamentoDoCarrinhoById(
        req.params.idCarrinho,
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Carrinho with idCarrinho ${req.params.idCarrinho}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Carrinho with idCarrinho " + req.params.idCarrinho
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Carrinho with the specified idCarrinho in the request
exports.delete = (req, res) => {
    Carrinho.removeById(req.params.idCarrinho, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Carrinho with idCarrinho ${req.params.idCarrinho}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Carrinho with idCarrinho " + req.params.idCarrinho
                });
            }
        } else res.send({ message: `Carrinho was deleted successfully!` });
    });
};

// Delete all Carrinho from the database.
exports.deleteAll = (req, res) => {
    Carrinho.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Carrinho."
            });
        else res.send({ message: `All Carrinho were deleted successfully!` });
    });
};