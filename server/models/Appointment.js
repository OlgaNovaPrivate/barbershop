import { mongoose } from 'mongoose';
export const schema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    serviceInfo: {
      type: String,
      required: true,
    },
    barber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Barber',
    },
    userInfo: {
      type: Object,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Appointment = mongoose.model('Appointment', schema, 'JWTAppointments');
