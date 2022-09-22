module.exports = app => {
    const usuarios = require("../controllers/deleteall.controller.js");
    var router = require("express").Router();
    
    // Delete all rotas
    router.delete("/", usuarios.deleteAll); // ok
    
    app.use('/api/deleteall', router);
  };