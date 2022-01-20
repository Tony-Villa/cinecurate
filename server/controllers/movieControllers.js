const axios = require('axios');
const pool = require('../db_config/db');
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

const recentReviewed = async (req, res, next) => {
  try {
    const reviewed = await pool.query(
      `SELECT * FROM (SELECT DISTINCT ON(movie_id) movie_id,movie_title,updated_at FROM reviews ORDER BY movie_id,updated_at) AS titles ORDER BY updated_at ASC LIMIT 10`
    );

    const reviewsObj = { reviews: reviewed.rows };

    const recentArr = reviewsObj.reviews.map((movie, i) => {
      return `https://api.themoviedb.org/3/movie/${movie.movie_id}?api_key=${apiKey}&language=en-US`;
    });

    const fetchedPromises = recentArr.map((endpoint) => axios.get(endpoint).then((res) => res.data));

    const movieDetails = await Promise.all(fetchedPromises);

    res.status(200).json({ movies: { results: movieDetails } });
  } catch (error) {
    console.log(error);
    next();
  }
};

const search = async (req, res, next) => {
  const { q, page } = req.query;

  const resp = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${q}&page=${page}&include_adult=false`
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

const credits = async (req, res) => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${req.params.movie_id}/credits?api_key=${apiKey}&language=en-US`
  );

  const credits = await resp.data;

  res.status(200).json({ credits });
};

const trailer = async (req, res) => {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/movie/${req.params.movie_id}/videos?api_key=${apiKey}&language=en-US`
  );

  const trailers = await resp.data;

  res.status(200).json({ trailers });
};

const genres = async (req, res) => {
  const { page } = req.body;

  const resp = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${req.params.genre_id}&with_watch_monetization_types=flatrate`
  );
  const movies = await resp.data;

  res.status(200).json({ movies });
};

module.exports = {
  show,
  recentReviewed,
  search,
  popular,
  similar,
  top_rated,
  upcoming,
  credits,
  trailer,
  genres,
};
