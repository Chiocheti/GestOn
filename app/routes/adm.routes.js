module.exports = app => {
  const adm = require("../controllers/adm.controller.js");
  var router = require("express").Router();

  // Create a new adm
  router.post("/", adm.create); // OK

  // Retrieve all adm
  router.get("/", adm.findAll); // OK

  // Retrieve a single adm with idFuncionario
  router.get("/:idFuncionario", adm.findOneById); // OK

  // Retrieve a single adm with idFuncionario
  router.get("/valida/:idFuncionario/:senha", adm.findOneByIdAndSenha); // OK

  // Update a adm with idFuncionario
  router.put("/:idFuncionario", adm.update); // OK

  // Delete a adm with idFuncionario
  router.delete("/:idFuncionario", adm.delete); // ok

  // Delete all adm
  router.delete("/", adm.deleteAll); // ok

  app.use('/api/adm', router);
};
