import { NextRequest, NextResponse } from 'next/server';
import { requireAdminApi } from '@/lib/rbac';

export async function PATCH(request: NextRequest) {
  const result = await requireAdminApi(request);
  if ('error' in result) return result.error;

  const body = await request.json();
  return NextResponse.json({ message: 'Order status updated', data: body });
}
