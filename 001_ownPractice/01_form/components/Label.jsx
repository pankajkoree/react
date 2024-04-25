import React from "react";

export default function ({inputName, labelName}) {
  return (
    <>
      <label htmlFor={inputName}>{labelName}</label>
    </>
  );
}
