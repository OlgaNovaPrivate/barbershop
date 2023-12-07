import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }],
  passwordHash: String,
  role: {
    type: String,
    required: true,
  },
});

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.passwordHash;
  },
});

UserSchema.plugin(uniqueValidator);

const User = mongoose.model('User', UserSchema, 'JWTUsers');
export { User, UserSchema };
