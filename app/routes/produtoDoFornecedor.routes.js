module.exports = app => {
    const produtoDoFornecedor = require("../controllers/produtoDoFornecedor.controller.js");
    var router = require("express").Router();
    
    // Create a new ProdutoDoFornecedor
    router.post("/", produtoDoFornecedor.create); 
    
    // Retrieve all produtoDoFornecedor
    router.get("/", produtoDoFornecedor.findAll); 
    
    // Retrieve a single produtoDoFornecedor with idProdutoDoFornecedor
    router.get("/:idProdutoDoFornecedor", produtoDoFornecedor.findOneById); 
    
    // Retrieve a single produtoDoFornecedor with idProdutoDoFornecedor
    router.get("/produto/:idProduto", produtoDoFornecedor.findOneByIdProduto); 

    // Retrieve a single produtoDoFornecedor with idFornecedor
    router.get("/fornecedor/:idFornecedor", produtoDoFornecedor.findOneByIdFornecedor); 

    // Retrive all data from the produtoDoFornecedor and this product
    router.get("/getProduto/:idFornecedor", produtoDoFornecedor.findSomethingFromIdFornecedor); 
    
    // Update a produtoDoFornecedor with idProdutoDoFornecedor
    router.put("/:idProdutoDoFornecedor", produtoDoFornecedor.update);
    
    // Delete a produtoDoFornecedor with idProdutoDoFornecedor
    router.delete("/:idProdutoDoFornecedor", produtoDoFornecedor.delete);
    
    // Delete all produtoDoFornecedor
    router.delete("/", produtoDoFornecedor.deleteAll);
    
    app.use('/api/produtoDoFornecedor', router);
};