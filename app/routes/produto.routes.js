module.exports = app => {
  const produto = require("../controllers/produto.controller.js");
  var router = require("express").Router();
  
  // Create a new produto
  router.post("/", produto.create); // OK
  
  // Retrieve all produtos
  router.get("/", produto.findAll); // OK
  
  // Retrieve a single produto with id
  router.get("/:idProduto", produto.findOneById); // OK
  
  // Retrieve a single produto with id
  router.get("/nome/:nome", produto.getEveryLikeName); // OK
  
  // Update a produto with id
  router.put("/:idProduto", produto.update);
  
  // Delete a produto with id
  router.delete("/:idProduto", produto.delete);
  
  // Delete all produtoes
  router.delete("/", produto.deleteAll);
  
  app.use('/api/produto', router);
};