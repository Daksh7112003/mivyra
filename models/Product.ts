import { Schema, model, models } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: Number,
    category: { type: String, required: true },
    occasion: String,
    stock: { type: Number, default: 0 },
    images: [String],
    rating: { type: Number, default: 0 },
    reviewsCount: { type: Number, default: 0 },
    bestseller: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default models.Product || model('Product', productSchema);
