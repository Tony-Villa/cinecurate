const router = require('express').Router();
const ctrl = require('../controllers');

// register
router.post('/register', ctrl.users.register);

module.exports = router;
