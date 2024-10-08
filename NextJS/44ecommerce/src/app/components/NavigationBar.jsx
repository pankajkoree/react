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
import darkMode from "../assets/dark-mode.png";
import lightMode from "../assets/light-mode.png";

const NavigationBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDarkMode(document.body.classList.contains("dark"));
    }
  }, []);

  return (
    <nav className="sticky top-0 z-10 w-full grid grid-cols-3 text-center h-[64px] dark:bg-black border bg-white">
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

      {/* div to have,theme, login, cart */}
      <div className="relative flex flex-row justify-end items-center right-12 gap-12">
        {/* theme div */}
        <div
          className="relative flex flex-row items-center gap-2"
          onClick={addDarkMode}
        >
          {isDarkMode ? (
            <Image
              src={darkMode}
              alt="cart"
              className="relative w-[36px] h-[36px]"
            />
          ) : (
            <Image
              src={lightMode}
              alt="cart"
              className="relative w-[36px] h-[36px]"
            />
          )}
        </div>
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
