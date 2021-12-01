const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();

const app = express();
const PORT = 3737;

// middleware
app.use(express.json());
app.use(cors());

// ROUTES //
app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/v1/movies', routes.movies);
app.use('/v1/reviews', routes.reviews);
app.use('/v1/wishlist', routes.wishlist);
app.use('/v1/auth', routes.users);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening on port ${PORT}`);
});
