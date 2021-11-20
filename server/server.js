const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3737;

// middleware
app.use(express.json);
app.use(cors());

// ROUTES //
app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
