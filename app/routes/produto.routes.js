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

  // Get a produto with id
  router.get("/produtosCotados/:idCarrinho", produto.getProdutosDoCarrinho); // --------------

  // Get a produto with id
  router.get("/IdCarrinhoANDIdFornecedor/:idCarrinho/:idFornecedor", produto.getProdutosIdCarrinhoANDIdFornecedor); // --------------

  // Get a produto with id
  router.get("/SUM/:idCarrinho/:idFornecedor", produto.soma); // --------------

  // Update a produto with id
  router.put("/:idProduto", produto.update);

  // Delete a produto with id
  router.delete("/:idProduto", produto.delete);

  // Delete all produtoes
  router.delete("/", produto.deleteAll);

  app.use('/api/produto', router);
};