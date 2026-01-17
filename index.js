const express = require('express');
const cors = require('cors');


const items = require('./data/items');

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/items', (req, res) => {
  res.json(items);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
