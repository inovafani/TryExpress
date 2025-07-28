import express from 'express';
import User from '../models/users.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.send(user);
});

router.post('/', async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  await newUser.save();

  res.send(`${user.first_name} has been added to the database`);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.send(`${id} deletet successfully from database`);
});

export default router;
