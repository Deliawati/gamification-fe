
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export const config = {
  matcher: [
    '/challenge/:path*',
    '/initialize/:path*',
    '/profile/:path*',
    '/games/:path*',
    '/',
  ],
  // source: 'https://api.game.zapps.co.id/:path*',
}
export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access_token");
  const response = NextResponse.next();
  console.log(response.status);

  // if(!accessToken && !request.nextUrl.pathname.startsWith('/initialize')) {
  //   return NextResponse.redirect(new URL('/initialize', request.url))
  // }
  
  // if(accessToken){
  //     if (request.nextUrl.pathname.startsWith('/initialize')) {
  //        return NextResponse.redirect(new URL('/', request.url))
  //     }
  // }
  
  return NextResponse.next();
}