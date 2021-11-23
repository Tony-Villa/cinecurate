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
    const { user_id, movie_id, movie_title } = req.body;

    const wishlist = await pool.query(
      'INSERT INTO wishlist (user_id, movie_id, movie_title) VALUES ($1,$2,$3) RETURNING *',
      [user_id, movie_id, movie_title]
    );

    res.status(200).json({ addedWishlist: wishlist.rows[0] });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
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
