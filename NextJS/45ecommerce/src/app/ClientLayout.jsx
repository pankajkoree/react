"use client";

import { Toaster } from "react-hot-toast";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function ClientLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Navigation */}
      <NavigationBar />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Toast notifications */}
      <Toaster position="bottom-right" />

      {/* React Query Devtools */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
