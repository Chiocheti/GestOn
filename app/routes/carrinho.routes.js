module.exports = app => {
    const carrinho = require("../controllers/carrinho.controller.js");
    var router = require("express").Router();

    // Create a new Carrinho
    router.post("/", carrinho.create); 
    
    // Retrieve all carrinho
    router.get("/", carrinho.findAll); 
    
    // Retrieve a single carrinho with idCarrinho
    router.get("/:idCarrinho", carrinho.findOneByIdCarrinho); 
    
    // Retrieve a single carrinho with idConsumidor
    router.get("/consumidor/:idConsumidor", carrinho.findOneByIdConsumidor); 
    
    // Update a carrinho.precoTotal with idCarrinho
    router.put("/:idCarrinho", carrinho.updatePTById);
    
    // Update a carrinho.HoraCotacao with idCarrinho
    router.put("/horaCotacao/:idCarrinho", carrinho.updateHCById);
    
    // Update a carrinho.precoTotal with idCarrinho
    router.put("/horaFechamentoDoCarrinho/:idCarrinho", carrinho.updateHFCById);
    
    // Delete a carrinho with idCarrinho
    router.delete("/:idCarrinho", carrinho.delete);
    
    // Delete all carrinho
    router.delete("/", carrinho.deleteAll);
    
    app.use('/api/carrinho', router);
};