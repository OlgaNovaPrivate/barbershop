import dotenv from 'dotenv';
import express from 'express';
import { connectMongoDB } from './db/mongodb.js';
import cors from 'cors';
import { appointmentRouter } from './endpoints/appointment.js';
import { barberRouter } from './endpoints/barber.js';
import { userRouter } from './endpoints/user.js';
import { loginRouter } from './endpoints/login.js';
import { auth } from './middleware/auth.js';
dotenv.config();

const { PORT } = process.env;

const app = express();

// use users routex
app.use(express.json());
app.use(cors());

app.get('/api/test', (req, res) => {
  res.send('test');
});

// connect mongodb and start server
const start = async () => {
  console.log('Connecting to MongoDB');
  try {
    console.log('DOTENV ', process.env.MONGODB_URI);
    await connectMongoDB(process.env.MONGODB_URI);
    app.use(loginRouter);
    app.use(userRouter);
    app.use(auth, barberRouter);
    app.use(auth, appointmentRouter);
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT, () => console.log(`Appointment app is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
export default app;
start();
