const Usuario = require("../models/usuario.model.js");
// Create and Save a new Usuario
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a Usuario
  const usuario = new Usuario({
    email: req.body.email,
    cadastro: req.body.cadastro,
  });
  // Save Usuario in the database
  Usuario.create(usuario, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Usuario."
      });
    else res.send(data);
  });
};

// Delete all Usuarios from the database.
exports.deleteAll = (req, res) => {
  Usuario.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Usuarios."
      });
    else res.send({ message: `All Usuarios were deleted successfully!` });
  });
};