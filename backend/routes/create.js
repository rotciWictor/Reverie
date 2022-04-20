const dbConnection = require("../modules/DbConection");
const queries = require("../modules/queries.js");
const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const productData = req.body;

    console.log(productData);

    await dbConnection.query(`INSERT INTO produtos (id,nome,descricao,preco,data_criacao,usuario_criacao,data_atualizacao,usuario_atualizacao,imagem)
    VALUES ('${productData.id}','${productData.nome}','${productData.descricao}','${productData.preco}','${productData.data_criacao}','${productData.usuario_criacao}','${productData.data_atualizacao}','${productData.usuario_atualizacao}','${productData.imagem}')`);

    res.status(200);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
