import React from "react";
import "../index.css";

function InputBox() {
  return (
    <div>
      <label className="text-3xl">Username : </label>
      <input
        type="text"
        placeholder="enter your username"
        className="w-auto text-2xl h-[36px] border-4 rounded-lg p-2"
      />
    </div>
  );
}

export default InputBox;
