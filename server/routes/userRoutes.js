const router = require('express').Router();
const ctrl = require('../controllers');
const authorization = require('../middleware/authorization');
const emailValid = require('../middleware/emailValid');

// register
router.post('/register', emailValid, ctrl.users.register);
router.post('/login', emailValid, ctrl.users.login);
router.get('/isVerified', authorization, ctrl.users.isVerified);
router.get('/profile', authorization, ctrl.users.currentUser);

module.exports = router;
