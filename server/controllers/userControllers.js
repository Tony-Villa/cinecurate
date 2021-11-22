const pool = require('../db_config/db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
require('dotenv').config();

const register = async (req, res) => {
  try {
    // 1 - destructure req.body (username, email, password, first_name)
    const { username, email, password, first_name } = req.body;

    // 2 - check if user exists (if user exists, throw error)
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (user.rows.length != 0) {
      return res.status(401).send('This email already exists');
    }

    // 3 - bcrypt user's pw
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPass = await bcrypt.hash(password, salt);

    // 4 - save user to db
    const newUser = await pool.query(
      'INSERT INTO users (username, email, password, first_name) VALUES ($1,$2,$3,$4) RETURNING *',
      [username, email, hashedPass, first_name]
    );

    // 5 - generate JWT token
    const token = jwtGenerator(newUser.rows[0].id);

    res.json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  register,
};
