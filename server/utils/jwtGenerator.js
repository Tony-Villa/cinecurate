const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtGenerator = (id) => {
  const payload = {
    user: id,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 * 14 });
};

module.exports = jwtGenerator;
