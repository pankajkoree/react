import React from "react";
import "./App.css";
import Button from "./components/Button";
import ggle from "./assets/images/google.png";
import fb from "./assets/images/facebook.png";
import Label from "./components/Label";
import Input from "./components/Input";
const App = () => {
  return (
    <>
      <main>
        <div className="main-content">
          <div className="email-content">
            <Label inputName="emailInput" labelName="Email: " />
            <br></br>
            <Input inputType="text" placeholderName="type your email" />
          </div>
          <div className="password-content">
            <Label inputName="passwordInput" labelName="Password: " />
            <br></br>
            <Input inputType="password" placeholderName="type your password" />
          </div>
          <br /> <br />
          <div className="createAccount" onClick="submit">
            <p>Create an Account</p>
          </div>
          <p>or Sign up with </p> <br /> <br />
          <div className="buttonDiv">
            <Button
              imageURL={ggle}
              className="googleAccount"
              buttonName="Google"
            />

            <Button
              imageURL={fb}
              className="facebookAccount"
              buttonName="Facebook"
            />
          </div>
          <p className="terms-and-conditions">
            By signing up, I accept terms and conditions
          </p>
        </div>
        <p className="log-in">
          Already have an account? <a href="#">Log in here</a>
        </p>
      </main>
    </>
  );
};
export default App;
