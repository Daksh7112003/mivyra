import { NextResponse } from 'next/server';

const coupons = [{ code: 'MIVYRA10', type: 'percentage', value: 10, minOrderValue: 999, active: true }];

export async function GET() {
  return NextResponse.json({ data: coupons });
}
