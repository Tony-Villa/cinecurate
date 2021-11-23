const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/:user_id', ctrl.wishlist.showWishlist);
router.post('/', ctrl.wishlist.addToWishlist);
router.delete('/:id', ctrl.wishlist.deleteWishlistItem);

module.exports = router;
