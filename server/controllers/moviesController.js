const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.APIKEY;

const popular = async (req, res) => {
  const resp = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
  const popularMovies = await resp.data;

  res.status(200).json({ movies: popularMovies });
};

const similar = async (req, res) => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${req.params.movie_id}/similar?api_key=${apiKey}&language=en-US&page=1`
  );
  const similarMovies = await resp.data;

  res.status(200).json({ movies: similarMovies });
};

module.exports = {
  popular,
  similar,
};
