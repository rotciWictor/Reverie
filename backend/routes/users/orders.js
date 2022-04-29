const dbConnection = require("../../modules/DbConection");
// const queries = require("../../modules/queries.js");
const router = require("express").Router();

router.post("/itens", async (req, res) => {
    try {
      const {data} = req.body;
  
      await dbConnection.query(`INSERT INTO itens (user_id,product_id,quantity)
      VALUES ($1,$2,$3)`,[data.user_id,data.product_id,data.quantity_id]);
      
      await dbConnection.query(`INSERT INTO orders (itens_id,user_id)
      VALUES ($1,$2,$3)`,[data.itens_id,data.user_id,data.subtotal]);
      
      res.status(200)
      res.end("Pedido concluido com sucesso!")
    } catch (error) {
      console.error(error);
    }
  });
  
  module.exports = router;