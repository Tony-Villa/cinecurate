const pool = require('../db_config/db');
require('dotenv').config();

const showWishlist = async (req, res) => {
  try {
    // const { user_id } = req.body;

    const wishlist = await pool.query('SELECT * FROM wishlist WHERE user_id = $1', [req.params.user_id]);

    res.status(200).json({ wishlist: wishlist.rows });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

const addToWishlist = async (req, res) => {
  try {
    const { user_id, movie_id, movie_title, poster } = req.body;

    const checkMovie = await pool.query('SELECT * FROM wishlist WHERE movie_id = $1 and user_id = $2 ', [
      movie_id,
      user_id,
    ]);
    if (checkMovie.rows.length != 0) {
      return res.status(401).json({ message: 'This movie is already on your watchlist' });
    }

    const wishlist = await pool.query(
      'INSERT INTO wishlist (user_id, movie_id, movie_title,poster) VALUES ($1,$2,$3,$4) RETURNING *',
      [user_id, movie_id, movie_title, poster]
    );

    res.status(200).json({ addedWishlist: wishlist.rows[0] });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteWishlistItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await pool.query('DELETE FROM wishlist WHERE id = $1', [id]);

    res.json('Wishlist item was deleted');
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  showWishlist,
  addToWishlist,
  deleteWishlistItem,
};
