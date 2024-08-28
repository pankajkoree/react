import React from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import Login from "./Login";

function Signup() {
  const gotoLogin = (e) => {
    e.preventDefault();
    location.href = <Login />;
  };
  return (
    <div className="w-[40%] border-2 shadow-sm h-[360px] rounded-lg flex flex-col relative top-4">
      <h2 className="text-2xl text-center relative top-2">Signup</h2>
      <form className="relative top-5">
        <InputBox label="Fullname : " type="text" placeholder="fullname" />

        <InputBox label="Username : " type="text" placeholder="username" />

        <InputBox label="Password : " type="password" placeholder="password" />

        <Button buttonName="Signup" />
        <div className="relative top-5 text-center">
          <p>
            Already have an account? <span onClick={gotoLogin}>Login</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
