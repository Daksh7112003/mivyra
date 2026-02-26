import { NextRequest, NextResponse } from 'next/server';
import { loginSchema } from '@/lib/validators';
import { comparePassword, signToken } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import User from '@/models/User';

function getAuthErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : 'Unexpected server error';

  if (message.includes('ECONNREFUSED') || message.includes('127.0.0.1:27017')) {
    return {
      status: 503,
      message: 'Database is unavailable. Start MongoDB and try again.'
    };
  }

  return {
    status: 500,
    message: 'Unable to login right now. Please try again shortly.'
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) return NextResponse.json(parsed.error.flatten(), { status: 400 });

    await connectDB();
    const user = await User.findOne({ email: parsed.data.email.toLowerCase() });

    if (!user || !(await comparePassword(parsed.data.password, user.password))) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = signToken({ userId: user._id.toString(), role: user.role });
    const response = NextResponse.json({
      token,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/'
    });

    return response;
  } catch (error) {
    const mapped = getAuthErrorMessage(error);
    return NextResponse.json({ message: mapped.message }, { status: mapped.status });
  }
}
