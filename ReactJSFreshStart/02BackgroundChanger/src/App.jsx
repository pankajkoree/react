import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("teal");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="relative flex w-[90%] h-16 bg-white justify-center top-[840px] left-[90px] rounded-full gap-8">
          <button
            className="relative border-4  h-12 top-2 px-4 rounded-full bg-red-500"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="relative border-4  h-12 top-2 px-4 rounded-full bg-blue-500"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="relative border-4  h-12 top-2 px-4 rounded-full bg-yellow-500"
            onClick={() => setColor("gold")}
          >
            Gold
          </button>
          <button
            className="relative border-4  h-12 top-2 px-4 rounded-full bg-green-500"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="relative border-4  h-12 top-2 px-4 rounded-full bg-purple-500"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="relative border-4  h-12 top-2 px-4 rounded-full bg-lime-500"
            onClick={() => setColor("lime")}
          >
            Lime
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
