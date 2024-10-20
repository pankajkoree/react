"use client";

import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname === "/admin";

  return (
    <QueryClientProvider client={queryClient}>
      {!isAdminRoute && <NavigationBar />}
      <main className="flex-grow">{children}</main>
      {!isAdminRoute && <Footer />}
      <Toaster position="bottom-left" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
