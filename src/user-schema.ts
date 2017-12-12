import { Document, Schema, Model, model} from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  age: number;
  newUserIdHash();
}

export const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  createdAt: Date,
  updatedAt: Date
}, {
  timestamps: true
});

export const User: Model<IUser> = model<IUser>('User', UserSchema);