import React from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import Signup from "./Signup";

function Login() {
  const gotoSignup = (e) => {
    e.preventDefault();
    location.href = <Signup />;
  };
  return (
    <div className="w-[40%] border-2 shadow-sm h-[300px] rounded-lg flex flex-col relative top-4">
      <h2 className="text-2xl text-center relative top-2">Please login</h2>
      <form className="relative top-5">
        <InputBox label="Username : " type="text" placeholder="username" />
        <InputBox label="Password : " type="password" placeholder="password" />

        <Button buttonName="Login" />
        <div className="relative top-5 text-center">
          <p>
            Don't have an acccount? <span onClick={gotoSignup}>Sign up</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
