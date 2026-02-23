import { NextResponse } from 'next/server';

const orders: any[] = [];

export async function GET() {
  return NextResponse.json({ data: orders });
}

export async function POST(request: Request) {
  const body = await request.json();
  const order = { id: crypto.randomUUID(), status: 'Pending', ...body, createdAt: new Date().toISOString() };
  orders.push(order);
  return NextResponse.json(order, { status: 201 });
}
