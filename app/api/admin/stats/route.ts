import { NextRequest, NextResponse } from 'next/server';
import { requireAdminApi } from '@/lib/rbac';

export async function GET(request: NextRequest) {
  const result = await requireAdminApi(request);
  if ('error' in result) return result.error;

  return NextResponse.json({ totalSales: 214000, orders: 156, users: 1024 });
}
