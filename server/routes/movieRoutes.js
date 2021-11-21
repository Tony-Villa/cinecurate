const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/popular', ctrl.movies.popular);
router.get('/similar/:movie_id', ctrl.movies.similar);

// exports
module.exports = router;
