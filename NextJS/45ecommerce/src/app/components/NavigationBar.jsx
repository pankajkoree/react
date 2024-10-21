"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import logowhite from "../assets/logo-white.png";
import logoblack from "../assets/logo-black.png";
import cartBlack from "../assets/cart-black.png";
import cartColor from "../assets/cart-color.png";
import userBlack from "../assets/user-black.png";
import userColor from "../assets/user-color.png";
import darkMode from "../assets/dark-mode.png";
import lightMode from "../assets/light-mode.png";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./slider.scss";

const NavigationBar = () => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState("nodata");
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user && user.loggedIn) {
          const res = await axios.post("/api/users/me");
          setData(res.data.data.username);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, [user]);

  const gotoLogin = () => {
    if (user && user.loggedIn) {
      router.push(`/profile/${data}`);
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

      <div className="relative flex flex-row gap-2 items-center text-center overflow-hidden dark:text-white">
        {/* Sliding message */}
        <div className="sliding-message-container">
          <span className="sliding-message">
            Welcome to the junior shopping site
          </span>
        </div>
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
