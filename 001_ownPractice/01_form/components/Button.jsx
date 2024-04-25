import React from "react";

export default function Button({ buttonName, imageURL }) {
  return (
    <>
      <button>
        <img src={imageURL} alt={buttonName} />
        {buttonName}
      </button>
    </>
  );
}
