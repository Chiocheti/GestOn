const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3001"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "GestOn is where!!!" });
});
require("./app/routes/usuario.routes.js")(app);
require("./app/routes/consumidor.routes.js")(app);
require("./app/routes/fornecedor.routes.js")(app);
require("./app/routes/endereco.routes.js")(app);
require("./app/routes/produto.routes.js")(app);
require("./app/routes/produtoDoFornecedor.routes.js")(app);
require("./app/routes/carrinho.routes.js")(app);
require("./app/routes/produtoNoCarrinho.routes.js")(app);
require("./app/routes/favoritos.routes.js")(app);
require("./app/routes/itemFavoritado.routes.js")(app);
require("./app/routes/adm.routes.js")(app);
require("./app/routes/categoria.routes.js")(app);
// set port, listen for requests
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});