import { NextResponse } from "next/server";

export const middleware = (request) => {
  const path = request.nextUrl.pathname;

  console.log(path);

  // You can return a NextResponse as needed, or just return null
  return NextResponse.next();
};

export const config = {
  matcher: ["/", "/carts"],
};
