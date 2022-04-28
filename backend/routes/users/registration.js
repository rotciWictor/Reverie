const dbConnection = require("../../modules/DbConection");
// const queries = require("../../modules/queries.js");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const {data} = req.body;
    const hashPassword = await bcrypt.hash(data.password, 10);
    console.log(hashPassword);

    await dbConnection.query(`INSERT INTO users (name,email,cpf,password,address,zip_code,telephone)
    VALUES ($1,$2,$3,$4,$5,$6,$7)`,[data.name,data.email,data.cpf,hashPassword,data.address,data.zip_code,data.telephone]);
    // await dbConnection.query(`INSERT INTO users (name, email, cpf, password, address, zip_code, telephone)
    // VALUES (${data.name}, ${data.email}, ${data.cpf}, ${hashPassword}, ${data.address}, ${data.zip_code},${data.telephone})`);
    
    res.status(200)
    res.end("Cadastro concluido com sucesso!")
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
