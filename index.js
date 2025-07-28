import express from 'express';
import userRoutes from './routes/users.js';
import bodyParser from 'body-parser';
import connectDB from './db.js';

const app = express();
const port = 5000;

connectDB();

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
