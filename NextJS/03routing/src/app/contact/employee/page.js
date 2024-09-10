import Link from "next/link";
import React from "react";

const employee = () => {
  return (
    <>
      <h1>Employee Contact</h1>

      <Link
        href="/contact"
        className="relative bg-gray-400 p-4 top-8 left-2 w-[200px]"
      >
        Back to Contact
      </Link>
    </>
  );
};

export default employee;
