import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  try {
    const pathname = req.nextUrl?.pathname || "";

    // Check if the route is a login route
    const isLoginRoute = pathname === "/login" || pathname === "/signup";

    // Get the session token from the request
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (isLoginRoute && token) {
      // If the user is logged in, redirect to the home page
      return NextResponse.redirect(new URL("/", req.url));
    }

    // Allow the request to proceed
    return NextResponse.next();
  } catch (error) {
    console.error("Middleware error:", error);
    return NextResponse.next(); // Allow the request to proceed even if an error occurs
  }
}

export const config = {
  matcher: ["/login", "/signup"], // Apply middleware only to the login route
};
