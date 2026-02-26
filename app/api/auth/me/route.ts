import { NextRequest, NextResponse } from 'next/server';
import { requireUserApi } from '@/lib/rbac';

export async function GET(request: NextRequest) {
  const result = await requireUserApi(request);
  if ('error' in result) return result.error;

  return NextResponse.json({ user: result.user });
}
