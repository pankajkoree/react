import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    count !== 20 ? setCount(count + 1) : alert("Increment limit reached...");
  };

  const decrement = () => {
    count !== 0 ? setCount(count - 1) : alert("Decrement limit reached...");
  };

  return (
    <>
      <h1 className="relative text-2xl">Count : {count}</h1>
      <button
        onClick={increment}
        className="relative border border-sky-500 p-3 rounded-full text-xl right-4 top-4 bg-green-500 text-white"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="relative border border-sky-500 p-3 rounded-full text-xl top-4 bg-red-500 text-white"
      >
        Decrement
      </button>
    </>
  );
}

export default App;
