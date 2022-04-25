const router = require("express").Router();
const authenticateToken = require("../../middleware/authorization");
const  jwtTokens = require("../../utils/jwt-helpers");
const dbConnection = require("../../modules/DbConection");

let refreshTokens = [];

/* GET users listing. */
router.get("/", authenticateToken, async (req, res) => {
  try {
    console.log(req.cookies);
    const users = await pool.query("SELECT * FROM users");
    res.json({ users: users.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await pool.query(
      "INSERT INTO users (user_name,user_email,user_password) VALUES ($1,$2,$3) RETURNING *",
      [req.body.name, req.body.email, req.body.password]
    );
    res.json(jwtTokens(newUser.rows[0]));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    const users = await pool.query("DELETE FROM users");
    res.status(204).json(users.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
