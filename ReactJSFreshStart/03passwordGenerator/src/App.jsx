import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useRef to store the reference
  const passwordRef = useRef(null);

  const passowordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZzbcdefghijklmnopqrstuvwxyz";
    numberAllowed === true ? (str += "0123456789") : str;
    symbolAllowed === true ? (str += "~`!@#%^&*()_-+=|[]{}',.?/") : str;

    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, symbolAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [length, numberAllowed, symbolAllowed, password]);

  useEffect(() => {
    passowordGenerator();
  }, [length, numberAllowed, symbolAllowed, passowordGenerator]);

  return (
    <>
      <div className="relative w-full text-center text-white flex flex-column justify-center items-center">
        <div className="relative top-4 bg-lime-800 w-[50%] h-60 rounded-xl ">
          <div>
            <h1 className="relative p-4 text-2xl font-bold">
              Password Generator
            </h1>
            <input
              type="text"
              value={password}
              className="w-[70%] h-10 text-xl text-red-500 px-4 rounded-l-full mt-3"
              id="password"
              name="password"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              readOnly
              ref={passwordRef}
            />
            <button
              className="w-[15%] h-10 text-xl bg-black rounded-r-full text-white-700"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="relative top-8 flex gap-8 flex-column justify-center items-center">
            <div className="relative flex gap-2">
              <label htmlFor="range">Length : {length}</label>
              <input
                type="range"
                min={0}
                max={50}
                id="range"
                name="range"
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
            </div>
            <div className="relative flex gap-2">
              <label htmlFor="numberAllowed">Numbers</label>
              <input
                type="checkbox"
                id="numberAllowed"
                name="number"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
            </div>
            <div className="relative flex gap-2">
              <label htmlFor="symbolAllowed">Symbols</label>
              <input
                type="checkbox"
                id="symbolAllowed"
                name="symbol"
                onChange={() => {
                  setSymbolAllowed((prev) => !prev);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
