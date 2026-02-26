import { NextRequest, NextResponse } from 'next/server';

const AUTH_PAGES = ['/auth/login', '/auth/signup'];

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const { pathname } = req.nextUrl;

  if ((pathname.startsWith('/admin') || pathname.startsWith('/dashboard')) && !token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  if (AUTH_PAGES.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/dashboard/:path*', '/auth/login', '/auth/signup']
};
