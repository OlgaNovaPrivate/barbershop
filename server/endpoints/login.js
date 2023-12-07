import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../models/User.js';

const loginRouter = express.Router();

loginRouter.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });
  if (user) {
    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (validPassword) {
      const payload = {
        username: user.username,
        id: user._id,
        role: user.role,
      };
      const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
      // login ok -> send token to the client
      res.status(200).send({ token, username: user.username, id: user._id });
    } else {
      res.status(400).json({ error: 'Username or password is invalid!' });
    }
  } else {
    res.status(401).json({ error: 'User does not exist!' });
  }
});

export { loginRouter };
