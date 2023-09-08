import express from 'express';
import data from './data.js';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seed.routes.js';
import productRouter from './routes/product.routes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api/seed', seedRouter)
app.use('/api/products', productRouter)

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
