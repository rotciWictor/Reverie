const dbConnection = require("../../modules/DbConection");
// const queries = require("../../modules/queries.js");
const router = require("express").Router();
const path = require("path");
const bcrypt = require("bcrypt");
const JWTTokens = require("../../utils/jwt-helpers");
// const cookieParser = require("cookie-parser");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await dbConnection.query(
      `SELECT email FROM users WHERE email = ${email}`
    );
    const hashPassword = user[0].password;

    const matchs = await bcrypt.compare(password, hashPassword);

    if (!matchs) {
      return res.status(400).json("Senha incorreta");
    }

    let tokens = JWTTokens(user);

    res.cookie("Cookie", tokens.refreshToken, {
      semiSite: "none",
      secure: true,
    });
    res.status(200);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router