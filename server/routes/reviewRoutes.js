const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/:category', ctrl.reviews.showReviews);

// exports
module.exports = router;
