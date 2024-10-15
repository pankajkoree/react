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
import { useRouter } from "next/navigation";

const NavigationBar = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

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

  const gotoLogin = () => {
    if (user && user.loggedIn) {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  };

  const gotoMainPage = () => {
    router.push("/");
  };

  const gotoCart = () => {
    router.push("/carts");
  };

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
            className="relative flex p-2 cursor-pointer"
            onClick={gotoMainPage}
          />
        ) : (
          <Image
            src={logowhite}
            alt="logo"
            width={200}
            height={200}
            className="relative flex p-2 cursor-pointer"
            onClick={gotoMainPage}
          />
        )}
      </div>

      {/* div to implement search box */}
      <div className="relative flex flex-row gap-2 items-center">
        <Input
          placeholder="search for products"
          className="relative flex h-[44px] text-xl border-2 border-gray-700 transition-all duration-300 dark:border-transparent dark:hover:border-blue-500 dark:animate-border-animation"
        />
        {/* Hide search icon on mobile and tablet */}
        {isDarkMode ? (
          <Image
            src={searhColor}
            alt="search icon"
            className="relative w-[36px] h-[36px] hidden lg:block"
          />
        ) : (
          <Image
            src={searchBlack}
            alt="search icon"
            className="relative w-[36px] h-[36px] hidden lg:block"
          />
        )}
      </div>

      {/* div to have, theme, login, cart */}
      <div className="relative flex flex-row justify-end items-center right-12 gap-12">
        {/* Hide theme toggle on mobile and tablet */}
        <div
          className="relative flex-row items-center gap-2 cursor-pointer hidden lg:flex"
          onClick={addDarkMode}
        >
          {isDarkMode ? (
            <Image
              src={darkMode}
              alt="dark mode"
              className="relative w-[36px] h-[36px]"
            />
          ) : (
            <Image
              src={lightMode}
              alt="light mode"
              className="relative w-[36px] h-[36px]"
            />
          )}
        </div>

        {/* cart div */}
        <div
          className="relative flex flex-row items-center gap-2 cursor-pointer"
          onClick={gotoCart}
        >
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
          {/* Hide cart text on mobile and tablet */}
          <p className="hidden lg:block">cart</p>
        </div>

        {/* login div */}
        <div
          className="relative flex flex-row items-center gap-2 cursor-pointer"
          onClick={gotoLogin}
        >
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
          {/* Hide login text on mobile and tablet */}
          <p className="hidden lg:block">
            {user && user.id ? user.username : "login"}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
