const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/credits/:movie_id', ctrl.movies.credits);
router.get('/trailers/:movie_id', ctrl.movies.trailer);
router.get('/recents', ctrl.movies.recentReviewed);
router.get('/search', ctrl.movies.search);
router.get('/popular', ctrl.movies.popular);
router.get('/top_rated', ctrl.movies.top_rated);
router.get('/upcoming', ctrl.movies.upcoming);
router.get('/similar/:movie_id', ctrl.movies.similar);
router.get('/genres/:genre_id', ctrl.movies.genres);
router.get('/:movie_id', ctrl.movies.show);

// exports
module.exports = router;
