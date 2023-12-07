import { User } from '../models/User.js';
import express from 'express';
import bcrypt from 'bcrypt';
import { adminAuth } from '../middleware/adminAuth.js';
import mongoose from 'mongoose';
import { getToken } from '../middleware/getToken.js';
const userRouter = express.Router();

userRouter
  .route('/api/users')
  .post(async (req, res) => {
    const { username, password, role } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    let defaultRole = 'user';

    const token = await getToken(req);

    if (role !== 'user ' && token) {
      const user_id = new mongoose.Types.ObjectId(token.id);
      const user = await User.findOne(user_id);
      if (user.role === 'admin') {
        defaultRole = role;
      } else {
        return res.status(400).json({ error: 'Invalid role' });
      }
    } else if (role !== 'user') {
      return res.status(400).json({ error: 'Invalid role' });
    }

    try {
      const user = new User({
        username: username,
        passwordHash: passwordHash,
        role: defaultRole,
      });
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  })

  .delete(adminAuth, async (req, res) => {
    try {
      const user = await User.deleteOne(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, msg: 'Oops... User can not be deleted!' });
    }
  });

export { userRouter };
