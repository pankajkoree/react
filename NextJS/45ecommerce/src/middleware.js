import { NextResponse } from "next/server";

export const middleware = (request) => {
  const path = request.nextUrl.pathname;

  // Paths that are public and don't require authentication
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

  return NextResponse.next(); // Continue to the requested page if the conditions above are not met
};

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/verifyEmail",
    "/profile",
    "/cart",
    "/someOtherProtectedPath",
  ],
};
