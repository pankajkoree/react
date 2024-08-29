import React from "react";
import Login from "./components/Login";
import "./App.css";

function App() {
  const loginFunction = (e, email, password) => {
    e.preventDefault();
    try {
      console.log(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl relative top-5">
        Form data to appwrite server
      </h1>
      <div className="relative flex justify-center top-5">
        <Login loginFunction={loginFunction} />
        {/* <Signup /> */}
      </div>
    </>
  );
}

export default App;
