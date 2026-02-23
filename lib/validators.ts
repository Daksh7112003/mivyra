import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6)
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export const productSchema = z.object({
  name: z.string().min(3),
  price: z.number().positive(),
  category: z.string().min(2),
  stock: z.number().int().nonnegative()
});
