import { NextResponse } from "next/server";

export const middleware = (request) => {
  const path = request.nextUrl.pathname;

  // Public paths that don't require authentication
  const isPublicPath =
    path === "/" ||
    path === "/login" ||
    path === "/signup" ||
    path === "/verifyEmail";

  const token = request.cookies.get("token")?.value || "";

  // If the user is logged in and tries to access login or signup, redirect to homepage
  if ((path === "/login" || path === "/signup") && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If the user is not logged in and tries to access protected paths, redirect to login
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access to the public path or if the user has a valid token
  return NextResponse.next();
};

export const config = {
  matcher: "/:path*", // Apply the middleware to all routes
};
