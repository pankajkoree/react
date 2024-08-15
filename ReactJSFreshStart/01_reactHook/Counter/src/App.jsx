import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const incrementValue = () => {
    counter !== 20
      ? setCounter(counter + 1)
      : alert("Increment limit is 20...");
  };
  const decrementValue = () => {
    counter !== 0
      ? setCounter(counter - 1)
      : alert("Can't decrese the count value less than zero...");
  };
  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={incrementValue}>Increment</button>
      <button onClick={decrementValue}>Decrement</button>
    </>
  );
}

export default App;
