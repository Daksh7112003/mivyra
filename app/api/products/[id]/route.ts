import { NextResponse } from 'next/server';
import { products } from '@/lib/data';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const product = products.find((p) => p._id === params.id);
  if (!product) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(product);
}
