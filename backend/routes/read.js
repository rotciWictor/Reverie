const dbConnection = require("../modules/dbConnection.js");
const queries = require("../modules/queries.js");
const router = require("express").Router();

router.get("/read", async (req, res) => {
  const usuarios = await dbConnection.query('SELECT * FROM clientes');

  console.log(usuarios);

  res.json(usuarios);

});

module.exports = router;
