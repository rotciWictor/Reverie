const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado" });
  }
  try {
    const restricted = process.env.REFRESH_TOKEN_SECRET;
    console.log(restricted);
    jwt.verify(token, restricted, (error, decoded) => {
      console.log(decoded.name);
      if (error)
        return res
          .status(500)
          .send({ auth: false, message: "Token inválido." });
    });
    console.log();
    next();
  } catch (error) {
    res.status(400).json({ msg: "Token inválido" });
  }
}
module.exports = authenticateToken;