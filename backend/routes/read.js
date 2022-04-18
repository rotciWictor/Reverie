const dbConnection = require("../modules/dbConnection.js");
const queries = require("../modules/queries.js");
const router = require("express").Router();

router.get("/read", async (req, res) => {

    const usuarios = await dbConnection.query(queries.getAllUserData);
  
    console.log(usuarios);
  
    res.json(usuarios);
  });

  module.exports = router;