import { NextRequest, NextResponse } from 'next/server';
import { requireAdminApi } from '@/lib/rbac';

export async function POST(request: NextRequest) {
  const result = await requireAdminApi(request);
  if ('error' in result) return result.error;

  const body = await request.json();
  return NextResponse.json({ message: 'Coupon created', data: body }, { status: 201 });
}
