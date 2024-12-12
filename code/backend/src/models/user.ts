import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: { type: Number, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    address: {
      street: { type: String },
      city: { type: String },
      state: { type: String },
      postalCode: { type: String },
      country: { type: String },
    },
    contactNumber: { type: String },
    status: { type: String, enum: ['verified', 'unverified'], default: 'unverified' },
  });

export default mongoose.model('UserModel', userSchema, 'users');