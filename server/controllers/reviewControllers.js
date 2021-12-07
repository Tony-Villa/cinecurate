const pool = require('../db_config/db');
const axios = require('axios');
require('dotenv').config();

const showReviews = async (req, res, next) => {
  try {
    const allReviews = await pool.query(
      'SELECT first_name, username, movie_title, rating, review FROM reviews INNER JOIN users ON reviews.user_id = users.id WHERE movie_id = $1 AND review_type = $2 ORDER BY reviews.created_at DESC',
      [req.params.movie_id, req.params.category]
    );

    res.status(200).json({ reviews: allReviews.rows });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

const showUserReviews = async (req, res, next) => {
  try {
    const userReviews = await pool.query(
      'SELECT reviews.id, first_name, username, movie_title, movie_id, review_type, rating, review, reviews.created_at FROM reviews INNER JOIN users ON reviews.user_id = users.id WHERE user_id = $1 ORDER BY reviews.created_at DESC',
      [req.params.user_id]
    );

    res.status(200).json({ reviews: userReviews.rows });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

const showAvgRating = async (req, res) => {
  try {
    const { movie_id } = req.params;

    // const movieTitle = await pool.query(`SELECT movie_title FROM reviews WHERE movie_id = $1`, [movie_id]);

    const tmdbRes = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.params.movie_id}?api_key=${apiKey}&language=en-US`
    );
    const tmdbResParsed = await tmdbRes.data;
    const movieTitle = tmdbResParsed.title;

    const avgRatings = await pool.query(
      'SELECT movie_title, review_type As category, ROUND(AVG(rating), 2) AS AvgRating FROM reviews WHERE movie_id = $1 GROUP BY review_type, movie_title ORDER BY review_type DESC',
      [movie_id]
    );

    res.status(200).json({ title: movieTitle, avgRatings: avgRatings.rows });
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
  showUserReviews,
  showAvgRating,
};
