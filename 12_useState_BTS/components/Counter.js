import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("rendering");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((previousState) => previousState + 1);
        }}
      >
        Increase count
      </button>
    </div>
  );
};
