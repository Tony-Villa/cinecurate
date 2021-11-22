const router = require('express').Router();
const ctrl = require('../controllers');
const emailValid = require('../middleware/emailValid');

// register
router.post('/register', emailValid, ctrl.users.register);
router.post('/login', emailValid, ctrl.users.login);

module.exports = router;
