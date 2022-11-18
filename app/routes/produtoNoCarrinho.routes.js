module.exports = app => {
    const produtoNoCarrinho = require("../controllers/produtoNoCarrinho.controller.js");
    var router = require("express").Router();

    // Create a new ProdutoNoCarrinho
    router.post("/", produtoNoCarrinho.create); //ok

    // Retrieve all ProdutoNoCarrinho
    router.get("/", produtoNoCarrinho.findAll); //ok

    // Retrieve a single ProdutoNoCarrinho with idProdutoNoCarrinho
    router.get("/:idProdutoNoCarrinho", produtoNoCarrinho.findOneByIdProdutoNoCarrinho); //ok

    // Retrieve a all ProdutoNoCarrinho with idProduto
    router.get("/produto/:idProduto", produtoNoCarrinho.findAllByIdProduto);  //ok

    // Retrieve a all ProdutoNoCarrinho with idCarrinho
    router.get("/carrinho/:idCarrinho", produtoNoCarrinho.findAllByIdCarrinho);// ok

    // Update a ProdutoNoCarrinho with idProdutoNoCarrinho
    router.put("/qtt/:idProdutoNoCarrinho", produtoNoCarrinho.updateTheQttById);

    // Delete a ProdutoNoCarrinho with idProdutoNoCarrinho
    router.delete("/:idProdutoNoCarrinho", produtoNoCarrinho.deleteById);

    // Delete a ProdutoNoCarrinho with idProdutoNoCarrinho
    router.delete("/deletarThis/:idProduto/:idCarrinho", produtoNoCarrinho.deleteThis);

    // Delete a ProdutoNoCarrinho with idCarrinho
    router.delete("/carrinho/:idCarrinho", produtoNoCarrinho.deleteAllByIdCarrinho);

    // Delete all ProdutoNoCarrinho
    router.delete("/", produtoNoCarrinho.deleteAll);

    app.use('/api/produtoNoCarrinho', router);
};