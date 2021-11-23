const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/:movie_id/:category', ctrl.reviews.showReviews);
router.post('/', ctrl.reviews.create);

// exports
module.exports = router;
