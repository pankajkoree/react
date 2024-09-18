"use client";
import { useState } from "react";
import "./style.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    // console.log(username, password);
    let data = await fetch("http://localhost:3000/api/integrate-post-api", {
      method: "Post",
      body: JSON.stringify({ username, password }),
    });
    data = await data.json();
    console.log(data);
    return data;
  };
  return (
    <>
      <div className="relative flex flex-col items-center bg-blue-200 h-[250px] w-[20%] left-[40%] top-2 rounded-lg">
        <input
          type="text"
          placeholder="username"
          value={username}
          className="relative w-[80%] border-2 border-white rounded-lg p-2 text-xl top-4 bg-blue-200"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          className="relative w-[80%] border-2 border-white rounded-lg p-2 text-xl top-8 bg-blue-200"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <button className="relative w-[300px] border-2 border-black rounded-lg p-2 text-xl top-6">
          Register
        </button> */}

        <button
          className="animated-button relative top-16"
          onClick={registerUser}
        >
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Register</span>
          <span className="circle"></span>
          <svg
            viewBox="0 0 24 24"
            className="arr-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Register;
