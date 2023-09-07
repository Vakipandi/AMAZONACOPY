import express from 'express';
import data from './data.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
