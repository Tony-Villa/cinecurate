const axios = require('axios');
const pool = require('../db_config/db');
require('dotenv').config();

const showReviews = async (req, res, next) => {
  try {
    const allReviews = await pool.query(
      'SELECT user_id, movie_title, rating, review FROM reviews WHERE review_type = $1',
      [req.params.category]
    );

    res.status(200).json({ reviews: allReviews.rows });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  showReviews,
};
