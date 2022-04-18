module.exports = {

    createNewUser: `
    INSERT INTO users (email, password, user_type_id)
      VALUES ($1, $2, 2);
    `,
  
    getUserId: `
    SELECT id FROM users WHERE email = $1;
    `,
  };