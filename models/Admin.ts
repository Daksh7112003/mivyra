import { Schema, model, models } from 'mongoose';

const adminSchema = new Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

export default models.Admin || model('Admin', adminSchema);
