import { NextResponse } from 'next/server';
import { products } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get('page') || 1);
  const limit = Number(searchParams.get('limit') || 10);
  const start = (page - 1) * limit;
  return NextResponse.json({ data: products.slice(start, start + limit), total: products.length, page, limit });
}
