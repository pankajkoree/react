import { NextResponse } from "next/server";

export const middleware = (request) => {
  const path = request.nextUrl.pathname;

  console.log(`Path: ${path}`);

  if (path === "/carts") {
    // keep a condition for the login state to be maintainer if the user is login direct user to carts else redirect to login
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If no redirect is needed, return the next response
  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/carts", "/login"],
};
