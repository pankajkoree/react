import Link from "next/link";
import React from "react";

const company = () => {
  return (
    <>
      <h1>Company contact</h1>

      <Link
        href="/contact"
        className="relative bg-gray-400 p-4 top-8 left-2 w-[200px]"
      >
        Back to Contact
      </Link>
    </>
  );
};

export default company;
