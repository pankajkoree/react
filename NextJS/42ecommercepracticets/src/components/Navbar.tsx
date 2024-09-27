// 'use client'

import logo from "../assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      {/* navigation bar */}
      <div className="relative flex items-center justify-between w-full border-2 border-gray-400 h-16 px-6">
        {/* logo */}
        <div className="flex-shrink-0">
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="relative rounded-lg"
          />
        </div>

        {/* search bar */}
        <div className="text-center border-2 border-gray-600">
          <input
            type="text"
            placeholder="Search for products"
            className="w-96 h-10 px-4"
          />
        </div>

        {/* login and cart */}
        <div className="flex gap-4">
          <button className="bg-gray-700 px-4 py-2 rounded text-white">Login</button>
          <button className="bg-gray-700 px-4 py-2 rounded text-white">Cart</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
