import { NextRequest, NextResponse } from 'next/server';
import { signupSchema } from '@/lib/validators';
import { hashPassword, signToken } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import User from '@/models/User';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = signupSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error.flatten(), { status: 400 });

  await connectDB();
  const existing = await User.findOne({ email: parsed.data.email.toLowerCase() });
  if (existing) return NextResponse.json({ message: 'Email already exists' }, { status: 409 });

  const user = await User.create({
    name: parsed.data.name,
    email: parsed.data.email.toLowerCase(),
    password: await hashPassword(parsed.data.password),
    role: 'user'
  });

  const token = signToken({ userId: user._id.toString(), role: user.role });
  const response = NextResponse.json({
    token,
    user: { id: user._id.toString(), name: user.name, email: user.email, role: user.role }
  }, { status: 201 });

  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/'
  });

  return response;
}
