import { mongoose } from 'mongoose';
import { User } from '../models/User.js';
import bcrypt from 'bcrypt';

// fix Mongoose strictQuery deprecation Warning
mongoose.set('strictQuery', false);

export const connectMongoDB = async url =>
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const initAdmin = [
  {
    username: 'admin@example.com',
    passwordHash: await bcrypt.hash('test1234', 10),
    role: 'admin',
  },
];

async function initDB() {
  try {
    // Check if there are existing users
    const numOfUsers = await User.countDocuments();
    if (numOfUsers === 0) {
      await User.create(initAdmin);
      console.log('Init admin data.');
    }
  } catch (error) {
    console.error('Error initializing data:', error);
  }
}

initDB();
