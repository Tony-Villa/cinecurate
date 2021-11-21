const router = require('express').Router();

//routes
router.get('/', (req, res) => {
  res.send('hello');
});

// exports
module.exports = router;
