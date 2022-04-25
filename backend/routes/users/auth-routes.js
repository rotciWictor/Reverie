const router = require("express").Router();
const jwt = require('jsonwebtoken')
const dbConnection = require("../../modules/DbConection")
const jwtTokens = require('../../utils/jwt-helpers')


router.post('/login', async (req, res) => {
  try {
    console.log(req.cookies, req.get('origin'));
    const { email, password } = req.body;
    const users = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);
    if (users.rows.length === 0) return res.status(401).json({error:"Usuário não cadastrado"});
    //PASSWORD CHECK
    const validPassword = password === users.rows[0].user_password;
    if (!validPassword) return res.status(401).json({error: "Senha incorreta"});
    //JWT
    let tokens = jwtTokens(users.rows[0]);//Gets access and refresh tokens
    res.cookie('refresh_token', tokens.refreshToken, {...(process.env.COOKIE_DOMAIN && {domain: process.env.COOKIE_DOMAIN}) , httpOnly: true,sameSite: 'none', secure: true});
    res.json(tokens);
  } catch (error) {
    res.status(401).json({error: error.message});
  }

});

router.delete('/refresh_token', (req, res) => {
  try {
    res.clearCookie('refresh_token');
    return res.status(200).json({message:'Refresh token deleted.'});
  } catch (error) {
    res.status(401).json({error: error.message});
  }
});

module.exports = router;