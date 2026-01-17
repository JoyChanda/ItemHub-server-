const express = require('express');
const cors = require('cors');


const items = require('./data/items');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('ItemHub API is running...');
});

// API Routes
app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.post('/api/items', (req, res) => {
  const newItem = {
    id: (items.length + 1).toString(),
    ...req.body
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

const PORT = 5000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
