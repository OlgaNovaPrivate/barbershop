import { mongoose } from 'mongoose';
const barberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

export const Barber = mongoose.model('Barber', barberSchema, 'JWTBarber');
