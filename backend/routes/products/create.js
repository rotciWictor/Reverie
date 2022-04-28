const dbConnection = require("../../modules/DbConection")
// const queries = require("../../modules/queries.js");
const router = require("express").Router();
const path = require("path");

router.post("/", async (req, res) => {
  try {
    const productData = req.body;

    console.log(productData);

    await dbConnection.query(`INSERT INTO products (name, description, content, price, image, create_at)
    VALUES ($1,$2,$3,$4,$5,$6)`,[productData.name, productData.description, productData.content, productData.price, productData.image, productData.create_at]);
    // await dbConnection.query(`INSERT INTO products (name,description,content,price,image,create_at)
    // VALUES (${productData.name},${productData.description}, ${productData.content}, ${productData.price}, ${productData.image}, ${productData.create_at}`);

    res.status(200)
    res.end("Cadastro concluido com sucesso!")

  } catch (error) {
    console.error(error);
  }
});

// router.post("/", upload.single("avatar"), async function (req, res, next) {
//   // req.file is the `avatar` file
//   // req.body will hold the text fields, if there were any
//   try {
//         const productData = req.body;

//         console.log(productData);
    
//         await dbConnection.query(`INSERT INTO produtos (id,nome,descricao,preco,data_criacao,usuario_criacao,data_atualizacao,usuario_atualizacao,imagem)
//         VALUES ('${productData.id}','${productData.nome}','${productData.descricao}','${productData.preco}','${productData.data_criacao}','${productData.usuario_criacao}','${productData.data_atualizacao}','${productData.usuario_atualizacao}','${req.file.path}')`);
    
//         res.status(200)
//         res.end("Cadastro concluido com sucesso!")
    
//       } catch (error) {
//         console.error(error);
//       }
// });

module.exports = router;

// {
//   "id": "0110",	
//   "nome": "Kit Detetive 100",
//   "descricao": "Obtenha seu equipamento completo de investigação e desvende diversos misterios",
//   "preco": "R$ 3.000,00",
//   "data_criacao": "2022-04-19T03:00:00.000Z",
//   "usuario_criacao": "CSV",
//   "data_atualizacao": "2022-04-19T03:00:00.000Z",
//   "usuario_atualizacao": "CSV",
//   "imagem": "/img/detective.jpg"
// }