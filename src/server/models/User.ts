import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  age: {
    type: Number,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true,
    default: '/img/default-avatar.jpg'
  },
  name: {
    type: String,
    required: true
  }
});

export interface UserDocument extends mongoose.Document {
  avatarUrl: string;
  name: string;
  age: string;
}

export const User = mongoose.model<UserDocument>('User', UserSchema);
