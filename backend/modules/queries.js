module.exports = {
  getAllUserData: `
  SELECT * FROM vw_all_users_data
  WHERE deleted_at IS NULL;
  `,
};
