import { NextResponse } from "next/server";

export const middleware = (request) => {
  const user = JSON.stringify(localStorage.getItem("user"));
  const path = request.nextUrl.pathname;

  console.log(`Path: ${path}`);

  if (path === "/carts") {
    // keep a condition for the login state to be maintained if the user is login direct user to carts else redirect to login
    if (user.loggedIn == true) {
      const cartUrl = new URL("/carts", request.url);
      return NextResponse.redirect(cartUrl);
    } else {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // If no redirect is needed, return the next response
  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/carts", "/login"],
};
