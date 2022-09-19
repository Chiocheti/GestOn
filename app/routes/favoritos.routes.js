module.exports = app => {
    const favoritos = require("../controllers/favoritos.controller.js");
    var router = require("express").Router();

    // Create a new favoritos
    router.post("/", favoritos.create); //ok

    // Retrieve all favoritos
    router.get("/", favoritos.findAll); //ok

    // Retrieve a single favoritos with idFavorito
    router.get("/:idFavorito", favoritos.findOneById); //ok

    // Delete a favoritos with idFavorito
    router.delete("/:idFavorito", favoritos.delete);

    // Delete all favoritos
    router.delete("/", favoritos.deleteAll);

    app.use('/api/favoritos', router);
};