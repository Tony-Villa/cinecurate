const pool = require('../db_config/db');
require('dotenv').config();

const showReviews = async (req, res, next) => {
  try {
    const allReviews = await pool.query(
      'SELECT first_name, username, movie_title, rating, review FROM reviews INNER JOIN users ON reviews.user_id = users.id WHERE movie_id = $1 AND review_type = $2',
      [req.params.movie_id, req.params.category]
    );

    res.status(200).json({ reviews: allReviews.rows });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

const create = async (req, res, next) => {
  try {
    const { user_id, movie_id, movie_title, review_type, rating, review } = req.body;

    const newReview = await pool.query(
      'INSERT INTO reviews (user_id, movie_id, movie_title, review_type, rating, review) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
      [user_id, movie_id, movie_title, review_type, rating, review]
    );

    res.json({ review: newReview.rows[0] });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;

    const { rating, review } = req.body;

    const updatedReview = await pool.query('UPDATE reviews SET rating = $1, review = $2 WHERE id = $3', [
      rating,
      review,
      id,
    ]);

    res.status(200).json('Review was updated!');
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedReview = await pool.query('DELETE FROM reviews WHERE id = $1', [id]);

    res.status(200).json('Review was deleted!');
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  showReviews,
  create,
  edit,
  deleteReview,
};
