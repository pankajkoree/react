import React, { useRef } from "react";
import InputBox from "./InputBox";
import Button from "./Button";

function Login({ loginFunction }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className="w-[40%] border-2 shadow-sm h-[300px] rounded-lg flex flex-col relative top-4">
      <h2 className="text-2xl text-center relative top-2">Please login</h2>
      <form
        className="relative top-5"
        onSubmit={(e) =>
          loginFunction(e, emailRef.current.value, passwordRef.current.value)
        }
      >
        <InputBox
          label="Username : "
          type="text"
          placeholder="username"
          id="email"
          ref={emailRef}
        />
        <InputBox
          label="Password : "
          type="password"
          placeholder="password"
          id="password"
          ref={passwordRef}
        />

        <Button type="submit" buttonName="Login" />
        <div className="relative top-5 text-center">
          <p>
            Don't have an account? <span>Sign up</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
