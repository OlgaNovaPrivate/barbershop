import { Appointment } from '../models/Appointment.js';
import express from 'express';
import mongoose from 'mongoose';
import { User } from '../models/User.js';

const appointmentRouter = express.Router();

appointmentRouter.post('/api/appointments', async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    const user_id = new mongoose.Types.ObjectId(req.decoded.id);
    await User.findByIdAndUpdate(user_id, { $push: { appointments: appointment._id } }, { new: true });
    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, msg: 'Oops... The appointment failed! Please, try again later' });
  }
});

appointmentRouter.get('/api/appointments', async (req, res) => {
  try {
    const user_id = new mongoose.Types.ObjectId(req.decoded.id);
    const result = await User.findById(user_id)
      .populate({
        path: 'appointments',
        populate: {
          path: 'barber',
        },
      })
      .exec();

    res.status(201).json({ success: true, data: result.appointments });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, msg: 'Oops... No appointments are found!' });
  }
});

appointmentRouter.delete('/api/appointments/:id', async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const appointment = await Appointment.findByIdAndDelete(appointmentId);

    const user_id = new mongoose.Types.ObjectId(req.decoded.id);
    await User.findByIdAndUpdate(user_id, { $pull: { appointments: appointmentId } }, { new: true });

    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, msg: 'Appointment can not be cancelled!' });
  }
});

export { appointmentRouter };
