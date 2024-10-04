import Image from "next/image";
import React from "react";
import logowhite from "../assets/logo-white.png";
import logoblack from "../assets/logo-black.png";
import { Input } from "@/components/ui/input";
import searchBlack from "../assets/search-black.png";
import cartBlack from "../assets/cart-black.png";
import userBlack from "../assets/user-black.png";

const NavigationBar = () => {
  return (
    <nav className="relative grid grid-cols-3 text-center border-2 h-[64px] dark:bg-black">
      {/* logo div */}
      <div className="relative flex items-center">
        <Image
          src={logowhite}
          alt="logo"
          width={200}
          height={200}
          className="relative flex p-2"
        />
      </div>

      {/* div to implement search box */}

      <div className="relative flex flex-row gap-2">
        <Input
          placeholder="search for products"
          className="relative flex h-[44px] text-xl top-[15.625%] border-2 border-gray-700"
        />
        <Image
          src={searchBlack}
          alt="search icon"
          className="relative w-[36px] h-[36px] top-[21.875%]"
        />
      </div>

      {/* div to have login, cart */}
      <div className="relative flex flex-row justify-end items-center right-12 gap-12">
        {/* cart div */}
        <div className="relative flex flex-row items-center gap-2">
          <Image
            src={cartBlack}
            alt="cart"
            className="relative w-[36px] h-[36px]"
          />
          <p>cart</p>
        </div>
        {/* login div */}
        <div className="relative flex flex-row items-center gap-2">
          <Image
            src={userBlack}
            alt="user icon"
            className="relative w-[36px] h-[36px]"
          />
          <p>login</p>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
