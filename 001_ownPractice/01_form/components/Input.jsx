import React from "react";

export default function Input({ inputType, placeholderName }) {
  return (
    <>
      <input type={inputType} placeholder={placeholderName} />
    </>
  );
}
