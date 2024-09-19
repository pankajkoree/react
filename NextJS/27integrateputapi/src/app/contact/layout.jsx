"use client";

import { usePathname } from "next/navigation";
import React from "react";

const layout = ({ children }) => {
  const pathName = usePathname();
  return (
    <>
      {/* conditonal common layout */}
      {pathName !== "/contact/employee" ? (
        <h1 className="relative flex text-center text-2xl justify-center p-2 bg-blue-600 text-white top-5">
          Under Contact Section
        </h1>
      ) : null}
      {children}
    </>
  );
};

export default layout;
