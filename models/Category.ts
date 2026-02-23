import { Schema, model, models } from 'mongoose';

const categorySchema = new Schema({ name: { type: String, required: true, unique: true }, description: String }, { timestamps: true });

export default models.Category || model('Category', categorySchema);
