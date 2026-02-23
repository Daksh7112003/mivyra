import { NextResponse } from 'next/server';

export async function PATCH(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: 'Order status updated', data: body });
}
