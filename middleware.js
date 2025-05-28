import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  try {
    const pathname = req.nextUrl?.pathname || "";
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    // Admin route protection
    if (pathname.startsWith("/admin")) {
      if (!token) {
        console.log("No token found, redirecting to login");
        return NextResponse.rewrite(new URL("/404", req.url));
      }

      const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
      const tokenEmail = token.email?.trim().toLowerCase();

      if (token.role !== "admin" || tokenEmail !== adminEmail) {
        return NextResponse.rewrite(new URL("/404", req.url));
      }

      return NextResponse.next();
    }

    // If logged in, prevent accessing login
    if (pathname === "/login") {
      if (token) {
        return NextResponse.redirect(new URL("/", req.url));
      }
      return NextResponse.next();
    }

    // if (pathname === "/signup") {
    //   return NextResponse.rewrite(new URL("/login", req.url));
    // }

    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/admin/:path*", "/login", "/signup"],
};
