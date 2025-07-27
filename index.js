import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3000;
const mongoDBURL = 'mongodb://localhost:27017/tryexpress';

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', userRoutes);

async function ConnectDB() {
  const client = new MongoClient(mongoDBURL);
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection erroir', error);
  }
}

ConnectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
