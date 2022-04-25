const dbConnection = require("../../modules/DbConection")
// const queries = require("../../modules/queries.js");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const produtos = await dbConnection.query("SELECT * FROM produtos");

  console.log(produtos);

  res.json(produtos);
});

module.exports = router;
