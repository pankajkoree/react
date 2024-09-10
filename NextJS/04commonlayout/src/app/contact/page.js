"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const gotoEmployee = (address) => {
    router.push(address);
  };
  return (
    <>
      <div className="relative flex flex-col gap-4">
        <h1 className="relative top-4">contact us</h1>

        <Link
          href="/contact/company"
          className="relative bg-gray-400 p-4 top-8 left-2 w-[200px] text-center"
        >
          Contact company
        </Link>

        <button
          className="relative bg-gray-400 p-4 top-8 left-2 w-[200px]"
          onClick={() => {
            gotoEmployee("/contact/employee");
          }}
        >
          Contact Employee
        </button>

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
