import React, { useContext, useState } from "react";
import userContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);
  return (
    <div className="relative w-[40%] flex flex-col h-44 border-2 gap-4 justify-center items-center top-8 left-[30%]">
      <div className="relative flex gap-4">
        <input
          type="text"
          name="username"
          placeholder="enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="relative w-60 h-16 bg-black text-white p-2 rounded-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="relative w-60 h-16 bg-black text-white p-2 rounded-lg"
        />
      </div>
      <div>
        <button
          className="relative w-60 h-16 bg-green-700 text-white border-2 text-2xl rounded-full"
          onClick={(e) => {
            e.preventDefault();
            setUser({ username, password });
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
