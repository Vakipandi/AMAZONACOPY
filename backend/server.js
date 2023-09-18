import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seed.routes.js';
import productRouter from './routes/product.routes.js';
import userRouter from './routes/user.routes.js';
import orderRouter from './routes/order.routes.js';
import path from 'path';

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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);



const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, '../frontend/dist')));

app.get('*', (req, res) =>
  res.sendFile(path.join(_dirname, '../opt/render/project/frontend/dist/index.html'))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
