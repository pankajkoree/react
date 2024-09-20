"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Home() {
  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col top-4">
        <h2>Home</h2>
        {/* // routing through links */}
        <div className="relative flex p-4">
          <Link href="/about" className="relative bg-gray-400 p-4 top-8 left-2">
            About
          </Link>
        </div>

        {/* routing through navigation */}
        <div className="relative flex p-4">
          <button
            onClick={() => router.push("/contact")}
            className="relative bg-gray-400 p-4 top-8 left-2"
          >
            Contact
          </button>
          <button
            onClick={() => router.push("/services")}
            className="relative bg-gray-400 p-4 top-8 left-8"
          >
            Services
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
