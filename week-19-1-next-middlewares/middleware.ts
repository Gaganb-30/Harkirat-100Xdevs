import { NextRequest, NextResponse } from "next/server";

let count = 0;
export function middleware(req: NextRequest){
  if(req.nextUrl.pathname.startsWith('/admin')){
    return NextResponse.redirect(new URL('/signin', req.url));
  }
  count++;
  console.log(count);
  const res = NextResponse.next();
  return res;
}

// export const config = {
//   matcher: '/api/:path*',
// }