const router = require("express").Router();
const authenticateToken = require("../../middleware/authorization");
const  jwtTokens = require("../../utils/jwt-helpers");
const dbConnection = require("../../modules/DbConection");

let refreshTokens = [];

/* GET users listing. */
router.get("/", authenticateToken, async (req, res) => {
  try {
    console.log(req.cookies);
    const users = await dbConnection.query("SELECT * FROM usuario");
    res.json({ users: users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await dbConnection.query(
      "INSERT INTO users (nome,email,senha) VALUES ($1,$2,$3) RETURNING *",
      [req.body.name, req.body.email, req.body.password]
    );
    res.json(jwtTokens(newUser[0]));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    const users = await dbConnection.query("DELETE FROM usuario");
    res.status(204).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
