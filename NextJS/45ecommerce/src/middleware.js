import axios from "axios";
import { NextResponse } from "next/server";

export const middleware = (request) => {
  const token = request.cookies.get("token");
  const path = request.nextUrl.pathname;

  if (path === "/carts") {
    if (token?.value) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (path === "/buyNow") {
    if (token?.value) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/carts", "/login", "/buyNow"],
};
