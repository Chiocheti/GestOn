module.exports = app => {
    const itemFavoritado = require("../controllers/itemFavoritado.controller.js");
    var router = require("express").Router();

    // Create a new ItemFavoritado
    router.post("/", itemFavoritado.create); //ok

    // Retrieve all ItemFavoritado
    router.get("/", itemFavoritado.findAll); //ok

    // Retrieve a single ItemFavoritado with idItemFavoritado
    router.get("/:idItemFavoritado", itemFavoritado.findOneByIdItemFavoritado); //ok

    // Retrieve a all ItemFavoritado with idFavorito
    router.get("/favorito/:idFavorito", itemFavoritado.findAllByIdFavorito);  //ok

    // Delete a ItemFavoritado with idItemFavoritado
    router.delete("/:idItemFavoritado", itemFavoritado.deleteById);

    // Delete a ItemFavoritado with idFavorito
    router.delete("/favorito/:idFavorito", itemFavoritado.deleteAllByIdFavorito);

    // Delete all ItemFavoritado
    router.delete("/", itemFavoritado.deleteAll);

    app.use('/api/itemFavoritado', router);
};