import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("teal");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="relative flex w-[90%] h-16 bg-white text-white justify-center top-[840px] left-[90px] text-2xl rounded-full gap-8">
          <button
            className="relative border-4  h-12 top-2 px-5 text-2xl rounded-full bg-[teal]"
            onClick={() => setColor("teal")}
          >
            Teal
          </button>
          <button
            className="relative border-4  h-12 top-2 px-5 text-2xl rounded-full bg-[black]"
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="relative border-4  h-12 top-2 px-5 text-2xl rounded-full bg-[red]"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="relative border-4  h-12 top-2 px-5 text-2xl rounded-full bg-[blue]"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="relative border-4  h-12 top-2 px-5 text-2xl rounded-full bg-[gold]"
            onClick={() => setColor("gold")}
          >
            Gold
          </button>
          <button
            className="relative border-4  h-12 top-2 px-5 text-2xl rounded-full bg-[green]"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="relative border-4  h-12 top-2 px-5 text-2xl rounded-full bg-[purple]"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="relative border-4  h-12 top-2 px-5 text-2xl rounded-full bg-[lime]"
            onClick={() => setColor("lime")}
          >
            Lime
          </button>
          <button
            className="relative border-4  h-12 top-2 px-5 text-2xl rounded-full bg-[violet]"
            onClick={() => setColor("violet")}
          >
            Voilet
          </button>
          <button
            className="relative border-4  h-12 top-2 px-5 text-2xl rounded-full bg-[brown]"
            onClick={() => setColor("brown")}
          >
            Brown
          </button>
          <button
            className="relative border-4  h-12 top-2 px-5 text-2xl rounded-full bg-[silver]"
            onClick={() => setColor("silver")}
          >
            Silver
          </button>
          <button
            className="relative border-4  h-12 top-2 px-5 text-2xl rounded-full bg-[pink]"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
