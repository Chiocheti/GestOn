const sql = require("./db.js");
// constructor
const Produto = function (produto) {
  this.nome = produto.nome;
  this.descricaoLonga = produto.descricaoLonga;
  this.descricaoCurta = produto.descricaoCurta;
  this.linkImg = produto.linkImg;  
  this.marca = produto.marca;
};

Produto.create = (newProduto, result) => {
  sql.query("INSERT INTO produto SET ?", newProduto, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created Produto: ", { ...newProduto });
    result(null, { ...newProduto });
  });
};

Produto.findById = (idProduto, result) => {
  sql.query(`SELECT * FROM produto WHERE idProduto = '${idProduto}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found produto: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Produto with the idProduto
    result({ kind: "not_found" }, null);
  });
};

Produto.getAllLikeName = (nome , result) => {
  sql.query(`SELECT * FROM produto WHERE nome like '%${nome}%'` , (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Produtos: ", res);
    result(null, res);
  });
};

Produto.getTheProdutosDoCarrinho = (idCarrinho , result) => {
  sql.query(`
  select produto.nome,
  produto.descricaoLonga, 
  produto.descricaoCurta, 
  produto.linkImg, 
  produto.marca,
  produto.idProduto
  from produto
  inner join produtoNoCarrinho 
  on produtoNoCarrinho.idProduto = produto.idProduto
  where produtoNoCarrinho.idCarrinho = ${idCarrinho}` , (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Produtos: ", res);
    result(null, res);
  });
};

Produto.getTheProdutosIdCarrinhoANDIdFornecedor = (idCarrinho , idFornecedor , result) => {
sql.query(`
select produto.idProduto,
produtoDoFornecedor.idProdutoDoFornecedor,
produtoDoFornecedor.idFornecedor,
produtoDoFornecedor.preco,
produto.nome,
produto.descricaoLonga, 
produto.descricaoCurta, 
produto.linkImg, 
produto.marca
from produtoDoFornecedor
inner join produto
on produto.idProduto = produtoDoFornecedor.idProduto
inner join produtoNoCarrinho
on produtoNoCarrinho.idProduto = produto.idProduto
inner join carrinho
on produtoNoCarrinho.idCarrinho = carrinho.idCarrinho
where carrinho.idCarrinho = ${idCarrinho} and produtoDoFornecedor.idFornecedor = ${idFornecedor};` , (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Produtos: ", res);
    result(null, res);
  });
};

Produto.somarValores = (idCarrinho , idFornecedor , result) => {
sql.query(`
select nomeFantasia, SUM(preco) as "valor"
from produtoDoFornecedor
inner join produto
on produto.idProduto = produtoDoFornecedor.idProduto
inner join produtoNoCarrinho
on produtoNoCarrinho.idProduto = produto.idProduto
inner join carrinho
on produtoNoCarrinho.idCarrinho = carrinho.idCarrinho
inner join fornecedor
on produtoDoFornecedor.idFornecedor = fornecedor.idFornecedor
where carrinho.idCarrinho = ${idCarrinho} and produtoDoFornecedor.idFornecedor = ${idFornecedor}` , (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Produtos: ", res);
    result(null, res);
  });
};

Produto.getAll = (result) => {
  let query = "SELECT * FROM produto";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Produto: ", res);
    result(null, res);
  });
};

Produto.updateById = (idProduto, produto, result) => {
  sql.query(
    "UPDATE produto SET nome = ? , descricaoCurta = ? , descricaoLonga = ? , linkImg = ? , marca = ?  WHERE idProduto = ?",
    [produto.nome, produto.descricaoCurta, produto.descricaoLonga, produto.linkImg, produto.marca, idProduto],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found produto with the idProduto
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated produto: ", { ...produto.nome, ...produto.descricaoCurta, ...produto.descricaoLonga, ...produto.linkImg, ...produto.marca });
      result(null, { ...produto.nome, ...produto.descricaoCurta, ...produto.descricaoLonga, ...produto.linkImg, ...produto.marca });
    }
  );
};

Produto.remove = (idProduto, result) => {
  sql.query("DELETE FROM produto WHERE idProduto = ?", idProduto, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Produto with the idProduto
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted produto with idProduto: ", idProduto);
    result(null, res);
  });
};

Produto.removeAll = result => {
  sql.query("DELETE FROM produto", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`deleted ${res.affectedRows} produto`);
    result(null, res);
  });
};
module.exports = Produto;