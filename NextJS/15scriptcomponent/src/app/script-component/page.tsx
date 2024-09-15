"use client";
import Script from "next/script";

const Page = () => {
  return (
    <>
      <h1 className="relative text-3xl flex justify-center text-center bg-blue-400 text-white p-2">
        Loading the script using Next.js Script component
      </h1>
      <Script src="/feature.js" />
    </>
  );
};

export default Page;
