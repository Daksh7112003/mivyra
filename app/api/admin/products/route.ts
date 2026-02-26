import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/lib/data';
import { requireAdminApi } from '@/lib/rbac';

export async function GET(request: NextRequest) {
  const result = await requireAdminApi(request);
  if ('error' in result) return result.error;

  return NextResponse.json({ data: products });
}

export async function POST(request: NextRequest) {
  const adminCheck = await requireAdminApi(request);
  if ('error' in adminCheck) return adminCheck.error;

  const body = await request.json();
  return NextResponse.json({ message: 'Product created', data: body }, { status: 201 });
}
