module.exports = app => {
    const categoria = require("../controllers/categoria.controller.js");
    var router = require("express").Router();
    
    // Create a new categoria
    router.post("/", categoria.create); // OK
    
    // Retrieve all categoria
    router.get("/", categoria.findAll); // OK
    
    // Retrieve a single categoria with idCategoria
    router.get("/:idCategoria", categoria.findOneById); // OK
    
    // Delete a categoria with idCategoria
    router.delete("/:idCategoria", categoria.delete); // ok
    
    // Delete all categoria
    router.delete("/", categoria.deleteAll); // ok
    
    app.use('/api/categoria', router);
  };
  