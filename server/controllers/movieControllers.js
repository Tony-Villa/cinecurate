const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.APIKEY;

const show = async (req, res, next) => {
  try {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.params.movie_id}?api_key=${apiKey}&language=en-US`
    );
    const movieDetails = await resp.data;

    res.status(200).json({ movie: movieDetails });
  } catch (error) {
    console.log(error);
    next();
  }
};

const search = async (req, res, next) => {
  const { q } = req.query;

  const resp = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${q}&page=1&include_adult=false`
  );

  const foundMovie = await resp.data;

  res.status(200).json({ movie: foundMovie });
};

const popular = async (req, res) => {
  const resp = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
  const popularMovies = await resp.data;

  res.status(200).json({ movies: popularMovies });
};

const top_rated = async (req, res) => {
  const resp = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
  const topRatedMovies = await resp.data;

  res.status(200).json({ movies: topRatedMovies });
};

const upcoming = async (req, res) => {
  const resp = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`);
  const upcomingMovies = await resp.data;

  res.status(200).json({ movies: upcomingMovies });
};

const similar = async (req, res) => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${req.params.movie_id}/similar?api_key=${apiKey}&language=en-US&page=1`
  );
  const similarMovies = await resp.data;

  res.status(200).json({ movies: similarMovies });
};

module.exports = {
  show,
  search,
  popular,
  similar,
  top_rated,
  upcoming,
};
