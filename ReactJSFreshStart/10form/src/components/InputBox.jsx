import React, { forwardRef } from "react";

import "../index.css";

const InputBox = forwardRef(({ label, type, placeholder, id }, ref) => {
  return (
    <div>
      <label className="relative text-xl w-[177px] left-[10%]" htmlFor={label}>
        {label}{" "}
      </label>
      <br />
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        ref={ref}
        className="relative w-[80%] left-[10%] text-xl h-[36px] border-4 rounded-lg p-4"
      />
    </div>
  );
});

export default InputBox;
