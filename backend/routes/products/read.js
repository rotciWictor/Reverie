const dbConnection = require("../../modules/DbConection")
// const queries = require("../../modules/queries.js");
const router = require("express").Router();
const url = require('url')
const authenticateToken = require('../../middleware/authorization.js')


router.get("/", async (req, res) => {
  
  const produtos = await dbConnection.query("SELECT * FROM products");

  console.log(produtos);

  res.json(produtos);
});

router.get("/addcart", async (req, res) => {
  const id = req.param('id')
  const produto = await dbConnection.query(`SELECT * FROM products WHERE id = ${id}`);

  console.log(produto);

  res.json(produto);
});


module.exports = router;
