require("dotenv").config();
const jwt = require('jsonwebtoken');

function jwtTokens({ id, name, email }) {
  const user = { id, name, email}; 
  const accessToken = jwt.sign(user, "process.env.ACCESS_TOKEN_SECRET", { expiresIn: '10s' });
  const refreshToken = jwt.sign(user, "process.env.REFRESH_TOKEN_SECRET", { expiresIn: '10m' });
  return ({ accessToken, refreshToken });
}

module.exports = jwtTokens;