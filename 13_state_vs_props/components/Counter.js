import { useState } from "react";

export const Counter = ({ counterName }) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(counterName);
  console.log("rendering");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setName("pankaj kori");
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
        }}
      >
        Increase count
      </button>
    </div>
  );
};
