import { Schema, model, models } from 'mongoose';

const couponSchema = new Schema(
  {
    code: { type: String, required: true, unique: true },
    type: { type: String, enum: ['flat', 'percentage'], default: 'percentage' },
    value: { type: Number, required: true },
    minOrderValue: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
    expiry: Date
  },
  { timestamps: true }
);

export default models.Coupon || model('Coupon', couponSchema);
