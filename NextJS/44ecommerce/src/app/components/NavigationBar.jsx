"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logowhite from "../assets/logo-white.png";
import logoblack from "../assets/logo-black.png";
import { Input } from "@/components/ui/input";
import searchBlack from "../assets/search-black.png";
import searhColor from "../assets/search-color.png";
import cartBlack from "../assets/cart-black.png";
import cartColor from "../assets/cart-color.png";
import userBlack from "../assets/user-black.png";
import userColor from "../assets/user-color.png";

const NavigationBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if we are in the browser and then check for dark mode
    if (typeof window !== "undefined") {
      setIsDarkMode(document.body.classList.contains("dark"));
    }
  }, []);

  return (
    <nav className="relative grid grid-cols-3 text-center h-[64px] dark:bg-black border">
      {/* logo div */}
      <div className="relative flex items-center">
        {isDarkMode ? (
          <Image
            src={logoblack}
            alt="logo"
            width={200}
            height={200}
            className="relative flex p-2"
          />
        ) : (
          <Image
            src={logowhite}
            alt="logo"
            width={200}
            height={200}
            className="relative flex p-2"
          />
        )}
      </div>

      {/* div to implement search box */}

      <div className="relative flex flex-row gap-2">
        <Input
          placeholder="search for products"
          className="relative flex h-[44px] text-xl top-[15.625%] border-2 border-gray-700 transition-all duration-300 dark:border-transparent dark:hover:border-blue-500 dark:animate-border-animation"
        />
        {isDarkMode ? (
          <Image
            src={searhColor}
            alt="search icon"
            className="relative w-[36px] h-[36px] top-[21.875%]"
          />
        ) : (
          <Image
            src={searchBlack}
            alt="search icon"
            className="relative w-[36px] h-[36px] top-[21.875%]"
          />
        )}
      </div>

      {/* div to have login, cart */}
      <div className="relative flex flex-row justify-end items-center right-12 gap-12">
        {/* cart div */}
        <div className="relative flex flex-row items-center gap-2">
          {isDarkMode ? (
            <Image
              src={cartColor}
              alt="cart"
              className="relative w-[36px] h-[36px]"
            />
          ) : (
            <Image
              src={cartBlack}
              alt="cart"
              className="relative w-[36px] h-[36px]"
            />
          )}
          <p>cart</p>
        </div>
        {/* login div */}
        <div className="relative flex flex-row items-center gap-2">
          {isDarkMode ? (
            <Image
              src={userColor}
              alt="user icon"
              className="relative w-[36px] h-[36px]"
            />
          ) : (
            <Image
              src={userBlack}
              alt="user icon"
              className="relative w-[36px] h-[36px]"
            />
          )}
          <p>login</p>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
