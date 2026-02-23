import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ totalSales: 214000, orders: 156, users: 1024 });
}
