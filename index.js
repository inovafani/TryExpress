import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const mongoDBURL = 'mongodb://127.0.01:27017/tryexpressDB';

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use('/users', userRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('Mongo connection error:', err));
