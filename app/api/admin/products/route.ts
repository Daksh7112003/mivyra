import { NextResponse } from 'next/server';
import { products } from '@/lib/data';

export async function GET() { return NextResponse.json({ data: products }); }

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: 'Product created', data: body }, { status: 201 });
}
