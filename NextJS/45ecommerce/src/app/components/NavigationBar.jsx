// NavigationBar.js
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
import axios from "axios";

const NavigationBar = ({ onSearch }) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState("nodata");
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      const isDark = storedTheme === "true";
      setIsDarkMode(isDark);
      document.body.classList.toggle("dark", isDark);
    }
  }, []);

  const addDarkMode = () => {
    const newDarkMode = !isDarkMode;
    localStorage.setItem("theme", newDarkMode);
    setIsDarkMode(newDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
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

      {/* Search Box */}
      <div className="relative flex flex-row gap-2 items-center">
        <Input
          placeholder="search for products"
          className="relative flex h-[44px] text-base sm:text-[16px] md:text-xl border-2 border-gray-700 transition-all duration-300 dark:border-2 dark:hover:border-blue-500 dark:animate-border-animation"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>

      {/* ... rest of your nav items ... */}
    </nav>
  );
};

export default NavigationBar;
