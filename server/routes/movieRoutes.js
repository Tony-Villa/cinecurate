const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/search', ctrl.movies.search);
router.get('/popular', ctrl.movies.popular);
router.get('/similar/:movie_id', ctrl.movies.similar);
router.get('/:movie_id', ctrl.movies.show);

// exports
module.exports = router;
