import React from "react";

function Header() {
  return (
    <>
      <div className="width-full h-20 border-4 flex p-2">
        <div className="relative text-gray-500 w-[10%] flex justify-center items-center h-full text-3xl font-bold left-[10%]">
          My <span className="text-red-400">Logo</span>
        </div>
        <div className="relative text-gray-500 w-[15%] flex justify-center items-center h-full text-xl left-[65%] gap-5">
          <div>
            <button>Login</button>
          </div>
          <div className="bg-orange-500 p-2 text-white rounded-lg ">
            <button>Get Started</button>
          </div>
        </div>
        <div className="relative w-[35%] flex gap-8 text-2xl justify-center items-center left-[5%]">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Github</a>
        </div>
      </div>
    </>
  );
}

export default Header;
