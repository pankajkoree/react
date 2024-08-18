import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="width-full h-20 border-4 flex p-2 text-3xl">
        <div className="relative text-gray-500 w-[10%] flex justify-center items-center h-full font-bold left-[10%]">
          My <span className="text-red-400">Logo</span>
        </div>
        <div className="relative text-gray-500 w-[15%] flex justify-center items-center h-full text-xl left-[65%] gap-5">
          <div>
            <button>Login</button>
          </div>
          <div className="bg-orange-500 p-2 text-white rounded-lg w-[140px]">
            <button>Get Started</button>
          </div>
        </div>
        <div className="relative w-[35%] flex gap-8 text-2xl justify-center items-center left-[5%]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/github"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${
                isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Github
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
