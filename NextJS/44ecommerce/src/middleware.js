import { NextResponse } from "next/server";

export const middleware = (request) => {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/login" || path === "/signup" || path === "/verifyEmail";

  // Get the token from cookies
  const token = request.cookies.get("token")?.value || "";

  // If token exists and the user is on a public path, redirect to home
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};

export const config = {
  matcher: ["/login", "/signup", "/verifyEmail", "/profile"],
};
