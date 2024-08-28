import React from "react";

function Button({ buttonName }) {
  const login = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <button
        onClick={login}
        className="relative w-[80%] left-[10%] text-2xl   bg-green-700 rounded-lg p-2 text-white top-4"
      >
        {buttonName}
      </button>
    </div>
  );
}

export default Button;
