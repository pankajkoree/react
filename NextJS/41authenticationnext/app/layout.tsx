import { SessionProvider } from "next-auth/react";
import { Children } from "react";

export default function RootLayout({ children }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
