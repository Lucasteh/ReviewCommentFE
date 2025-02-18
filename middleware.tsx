export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
 
   if (!token) {
     return NextResponse.redirect(new URL("/page/signin", req.url));
   }
 
   return NextResponse.next();
 }

export const config = {
   matcher: [
      "/page/cart",        // Protects the /dashboard route
      //     "/profile/:path*",   // Protects /profile and all sub-paths
      //     "/admin/**",         // Protects all routes under /admin
   ],
};