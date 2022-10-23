module.exports = app => {
    const categoriasDoProduto = require("../controllers/categoriasDoProduto.controller.js");
    var router = require("express").Router();

    // Create a new categoriasDoProduto
    router.post("/", categoriasDoProduto.create);

    // Retrieve all categoriasDoProduto
    router.get("/", categoriasDoProduto.findAll);

    // Retrieve a single categoriasDoProduto with idCategoriasDoProduto
    router.get("/:idCategoriasDoProduto", categoriasDoProduto.findOneById);

    // Retrieve a single categoriasDoProduto with idCategoriasDoProduto
    router.get("/produto/:idProdutoDoFornecedor", categoriasDoProduto.findOneByIdProduto);

    // Retrieve a single categoriasDoProduto with idCategoriasDoProduto
    router.get("/categoria/:idCategoria", categoriasDoProduto.findOneByIdCategoria);

    // Delete a categoriasDoProduto with idCategoriasDoProduto
    router.delete("/:idCategoriasDoProduto", categoriasDoProduto.delete);

    // Delete a categoriasDoProduto with idCategoria
    router.delete("/categoria/:idCategoria", categoriasDoProduto.delete);

    // Delete all categoriasDoProduto
    router.delete("/", categoriasDoProduto.deleteAll);

    app.use('/api/categoriasDoProduto', router);
};