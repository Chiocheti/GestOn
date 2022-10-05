module.exports = app => {
  const adm = require("../controllers/adm.controller.js");
  var router = require("express").Router();

  // Create a new adm
  router.post("/", adm.create); // OK

  // Retrieve all adm
  router.get("/", adm.findAll); // OK

  // Retrieve a single adm with idAdm
  router.get("/:idAdm", adm.findOneById); // OK

  // Retrieve a single adm with idFuncionario
  router.get("/funcionario/:idAdm", adm.findOneByIdFuncioario); // OK

  // Update a adm with idAdm
  router.put("/:idAdm", adm.update); // OK

  // Delete a adm with idAdm
  router.delete("/:idAdm", adm.delete); // ok

  // Delete all adm
  router.delete("/", adm.deleteAll); // ok

  app.use('/api/adm', router);
};
