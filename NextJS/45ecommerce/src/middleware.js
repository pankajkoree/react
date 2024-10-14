import { NextResponse } from "next/server";

export const middleware = (request) => {
  const token = request.cookies.get("token");
  const path = request.nextUrl.pathname;

  console.log("Token:", token);
  console.log("Path:", path);

  // Check if the user is trying to access the /carts page
  if (path === "/carts") {
    if (token?.value) {
      // Token exists, allow access to /carts
      return NextResponse.next();
    } else {
      // Token doesn't exist, redirect to login
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // If no redirect is needed, return the next response
  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/carts", "/login"],
};
