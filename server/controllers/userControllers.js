const pool = require('../db_config/db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
require('dotenv').config();

// REGISTER //
const register = async (req, res) => {
  try {
    const { username, email, password, first_name } = req.body;

    console.log(username, email, password, first_name);

    // Check if user exists (if user exists, throw error)
    const userEmail = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const userNameCheck = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

    console.log(userEmail);
    console.log(userNameCheck);

    if (userEmail.rows.length != 0) {
      return res.status(401).send('This email already exists');
    }

    if (userNameCheck.rows.length != 0) {
      return res.status(401).send('This username already exists');
    }

    // hash pass
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPass = await bcrypt.hash(password, salt);

    // save user to db
    const newUser = await pool.query(
      'INSERT INTO users (username, email, password, first_name) VALUES ($1,$2,$3,$4) RETURNING *',
      [username, email, hashedPass, first_name]
    );

    console.log(newUser);

    // gen jwt
    const token = jwtGenerator(newUser.rows[0].id);

    console.log(token);

    res.json({ token });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error :)');
  }
};

// LOGIN //
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    //check if user exists
    const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

    if (user.rows.length === 0) {
      return res.status(401).json('Username is incorrect');
    }

    // validate pass
    const validPass = await bcrypt.compare(password, user.rows[0].password);

    if (!validPass) {
      return res.status(401).json('Password is incorrect');
    }

    // jwt
    const token = jwtGenerator(user.rows[0].id);

    res.json({ token, userId: user.rows[0].id, userName: username, firstName: user.rows[0].first_name });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

const isVerified = async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

const currentUser = async (req, res) => {
  try {
    const user = await pool.query('SELECT id, username,email,first_name FROM users WHERE id = $1', [req.user]);

    res.json(user.rows[0]);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  register,
  login,
  isVerified,
  currentUser,
};
