import { NextResponse } from 'next/server';
import { loginSchema } from '@/lib/validators';
import { comparePassword, hashPassword, signToken } from '@/lib/auth';

const users = [
  { id: 'u1', name: 'Demo User', email: 'user@mivyra.com', password: '', role: 'user' as const },
  { id: 'a1', name: 'Admin', email: 'admin@mivyra.com', password: '', role: 'admin' as const }
];

async function init() {
  if (!users[0].password) {
    users[0].password = await hashPassword('user@123');
    users[1].password = await hashPassword('admin@123');
  }
}

export async function POST(request: Request) {
  await init();
  const body = await request.json();
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error.flatten(), { status: 400 });

  const user = users.find((u) => u.email === parsed.data.email);
  if (!user || !(await comparePassword(parsed.data.password, user.password))) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }
  const token = signToken({ userId: user.id, role: user.role });
  return NextResponse.json({ token, user: { id: user.id, name: user.name, role: user.role } });
}
