const router = require('express').Router();
const ctrl = require('../controllers');

// register
router.post('/register', ctrl.users.register);
router.post('/login', ctrl.users.login);

module.exports = router;
