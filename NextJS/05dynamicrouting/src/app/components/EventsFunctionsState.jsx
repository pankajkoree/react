import React, { useState } from "react";

function EventsFunctionsState() {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const calcSquare = () => {
    const n = parseInt(inputValue);
    if (isNaN(n)) {
      setResult("Please enter a valid number");
      return;
    }
    let Bign = BigInt(n);
    let x = (Bign * (Bign + 1n)) / 2n;
    setResult(x * x);
  };

  return (
    <div className="relative flex flex-col justify-center">
      <h1 className="relative text-3xl text-center top-4">
        Event Functions And State
      </h1>
      <h2 className="relative text-2xl text-center top-4">
        Calculate the Square of sum of nth number
      </h2>

      <input
        type="text"
        placeholder="enter the number"
        value={inputValue}
        onChange={handleInputChange}
        className="relative w-[30%] left-[35%] top-8 text-2xl border-2 border-black rounded-xl p-4"
      />
      <button
        onClick={calcSquare}
        className="relative w-[25%] left-[37.5%] bg-lime-500 text-white p-4 text-3xl top-12 rounded-xl"
      >
        Click me
      </button>

      <h3 className="relative flex left-[48%] top-16">
        {result !== null ? `Result: ${result}` : ""}
      </h3>
    </div>
  );
}

export default EventsFunctionsState;
