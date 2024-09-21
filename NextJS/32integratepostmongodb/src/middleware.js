// this is for normal console to get in log in terminal on changing the url
// export default function middleware(){
//     console.log("this is middleware")
// }

// ---------------------------------------------------------------------------------------------

// this is when we want to have authentication on every page, until the user loggedin, you wont be redirected to the page
// import { NextResponse } from "next/server";

// export default function middleware(request) {
//   const isLogged = false;
//   if (!isLogged && request.nextUrl.pathname !== "/home") {
//     return NextResponse.redirect(new URL("/home", request.url));
//   }
// }

// ---------------------------------------------------------------------------------------------

// this will only authenticate for the page of contact, whene user is logged in, user wil be redirected to the contact page and its sub pages else not
import { NextResponse } from "next/server";

export default function middleware(request) {
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: ["/contact/:path*"],
};
