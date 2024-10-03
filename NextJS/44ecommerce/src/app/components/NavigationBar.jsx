import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import { Input } from "@/components/ui/input";
import search from "../assets/search-icon.svg"

const NavigationBar = () => {
  return (
    <nav className="relative grid grid-cols-3 text-center border-2 bg-gray-400">
      {/* logo div */}
      <div>
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={200}
          className="relative flex p-2"
        />
      </div>

      {/* div to implement search box */}

      <div className="relative flex flex-row  gap-2">
        <Input
          placeholder="search for products"
          className="relative flex top-[21.875%]"
        />
        <Image src={search} alt="search icon" className="relative w-[36px] h-[36px] top-[21.875%]" />
      </div>

      {/* div to have login, cart */}
      <div>
        <h1>cart</h1>
        <h2>login</h2>
      </div>
    </nav>
  );
};

export default NavigationBar;
