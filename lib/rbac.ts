import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { connectDB } from '@/lib/db';
import User from '@/models/User';

export async function getSessionUserFromToken(token?: string) {
  if (!token) return null;

  try {
    const payload = verifyToken(token);
    await connectDB();
    const user = await User.findById(payload.userId).select('_id name email role').lean();
    return user;
  } catch {
    return null;
  }
}

export async function getSessionUser() {
  const token = cookies().get('token')?.value;
  return getSessionUserFromToken(token);
}

export async function requireAdminPage() {
  const user = await getSessionUser();
  if (!user) redirect('/auth/login');
  if (user.role !== 'admin') redirect('/dashboard');
  return user;
}

export async function requireUserApi(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const user = await getSessionUserFromToken(token);

  if (!user) {
    return {
      error: NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    } as const;
  }

  return { user } as const;
}

export async function requireAdminApi(req: NextRequest) {
  const result = await requireUserApi(req);

  if ('error' in result) {
    return result;
  }

  if (result.user.role !== 'admin') {
    return {
      error: NextResponse.json({ message: 'Forbidden: admin access required' }, { status: 403 })
    } as const;
  }

  return result;
}
