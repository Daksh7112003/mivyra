import { NextResponse } from 'next/server';
import { signupSchema } from '@/lib/validators';
import { hashPassword, signToken } from '@/lib/auth';

const users: { id: string; name: string; email: string; password: string; role: 'user' | 'admin' }[] = [];

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = signupSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error.flatten(), { status: 400 });

  const existing = users.find((u) => u.email === parsed.data.email);
  if (existing) return NextResponse.json({ message: 'Email already exists' }, { status: 409 });

  const user = { id: crypto.randomUUID(), ...parsed.data, password: await hashPassword(parsed.data.password), role: 'user' as const };
  users.push(user);
  const token = signToken({ userId: user.id, role: user.role });
  return NextResponse.json({ token, user: { id: user.id, name: user.name, email: user.email } }, { status: 201 });
}
