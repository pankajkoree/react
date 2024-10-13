import { NextResponse } from "next/server";

export const middleware = (request) => {
  const path = request.nextUrl.pathname;
  
  
  
};

export const config = {
  matcher: "/:path*",
};
