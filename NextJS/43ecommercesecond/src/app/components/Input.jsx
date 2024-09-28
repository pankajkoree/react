import React from "react";

const Input = ({ type, placeholder, value }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className="relative w-[90%] border-2 border-gray-300 p-2 text-xl left-[5%] rounded-lg"
      />
    </>
  );
};

export default Input;
