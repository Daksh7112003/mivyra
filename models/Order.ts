import { Schema, model, models } from 'mongoose';

const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        product: { type: Schema.Types.ObjectId, ref: 'Product' },
        name: String,
        quantity: Number,
        price: Number
      }
    ],
    address: {
      line1: String,
      city: String,
      state: String,
      zip: String,
      country: String
    },
    status: { type: String, enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'], default: 'Pending' },
    paymentMethod: { type: String, enum: ['Razorpay', 'COD'], default: 'COD' },
    subtotal: Number,
    shipping: Number,
    discount: Number,
    total: Number
  },
  { timestamps: true }
);

export default models.Order || model('Order', orderSchema);
