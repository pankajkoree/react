import { useState } from "react";

export const Counter = ({ counterName, children: AppleCounter}) => {
  const [count, setCount] = useState(0);
  console.log(AppleCounter);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
        }}
      >
        Increase count
      </button>
      {AppleCounter}
    </div>
  );
};
