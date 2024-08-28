import React from "react";
import "../index.css";

function InputBox({ label, placeholder, type }) {
  return (
    <div>
      <label className="relative text-xl w-[177px] left-[10%]" htmlFor={label}>
        {label}{" "}
      </label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        id={label}
        className="relative w-[80%] left-[10%] text-xl h-[36px] border-4 rounded-lg p-4"
      />
    </div>
  );
}

export default InputBox;
