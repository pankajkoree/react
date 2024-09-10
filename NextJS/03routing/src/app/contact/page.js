"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col gap-4">
        <h1>contact us</h1>

        <Link
          href="/contact/company"
          className="relative bg-gray-400 p-4 top-8 left-2 w-[200px]"
        >
          Contact company
        </Link>

        {/* routing using navigation */}
        <button
          onClick={() => router.push("/home")}
          className="relative bg-gray-400 p-4 top-8 left-2 w-[200px]"
        >
          Back to Home
        </button>
      </div>
    </>
  );
};

export default page;
