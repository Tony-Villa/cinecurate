const router = require('express').Router();

//routes
router.get('/latest', (req, res) => {
  res.send('hello');
});

// exports
module.exports = router;
