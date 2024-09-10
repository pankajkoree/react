import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h2>About us</h2>

      {/* routing through linking */}
      <Link href="/home" className="relative bg-gray-400 p-4 top-8 left-2">
        Home
      </Link>
    </>
  );
};

export default page;
