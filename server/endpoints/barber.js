import { Barber } from '../models/Barber.js';
import express from 'express';
import { adminAuth } from '../middleware/adminAuth.js';
import mongoose from 'mongoose';

const barberRouter = express.Router();
barberRouter
  .post('/api/barbers', adminAuth, async (req, res) => {
    try {
      const barbers = await Barber.create(req.body);
      res.status(201).json({ success: true, data: barbers });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, msg: 'Oops... Barber can not be added!' });
    }
  })
  .get('/api/barbers', async (req, res) => {
    try {
      const barbers = await Barber.find();
      res.status(201).json({ success: true, data: barbers });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, msg: 'Oops... No barbers are found!' });
    }
  })
  .delete('/api/barbers/:id', adminAuth, async (req, res) => {
    try {
      const barberId = req.params.id;
      await Barber.findByIdAndDelete(barberId);
      res.status(201).json({ success: true, data: 'ok' });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, msg: 'Oops... Barber can not be deleted!' });
    }
  });

export { barberRouter };
