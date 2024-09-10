'use client'
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter()
  return (
    <>
      <h1>Services pages</h1>
      {/* routing using navigation */}
      <button
        onClick={() => router.push("/home")}
        className="relative bg-gray-400 p-4 top-8 left-2"
      >
        Back to Home
      </button>
    </>
  );
};

export default page;
