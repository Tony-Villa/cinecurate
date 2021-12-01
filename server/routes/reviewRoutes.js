const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/avgrating/:movie_id', ctrl.reviews.showAvgRating);
router.get('/:movie_id/:category', ctrl.reviews.showReviews);
router.get('/:user_id', ctrl.reviews.showUserReviews);
router.post('/', ctrl.reviews.create);
router.put('/:id', ctrl.reviews.edit);
router.delete('/:id', ctrl.reviews.deleteReview);

// exports
module.exports = router;
