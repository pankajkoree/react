"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminLogin = () => {
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState(""); // Use email for consistency
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Corrected typo

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure correct headers
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (data.success) {
        alert("Login successful");
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Login error: " + error.message);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-[30%] left-[35%] top-5 text-2xl border-2 border-yellow-300 rounded-lg">
      <h1>Signup Page</h1>

      <form
        className="relative flex flex-col justify-center p-5 gap-4 w-full"
        onSubmit={handleSubmit}
      >
        <Label className="relative flex text-xl left-[5%]">User Type</Label>
        <Input
          type="text"
          placeholder="usertype"
          value={userType}
          className="relative left-[5%] w-[90%] text-xl"
          onChange={(e) => setUserType(e.target.value)}
        />
        <Label className="relative flex text-xl left-[5%]">Email</Label>
        <Input
          type="email"
          placeholder="email"
          value={email}
          className="relative left-[5%] w-[90%] text-xl"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label className="relative flex text-xl left-[5%]">Password</Label>
        <Input
          type="password"
          placeholder="password"
          value={password}
          className="relative left-[5%] w-[90%] text-xl"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label className="relative flex text-xl left-[5%]">
          Confirm Password
        </Label>
        <Input
          type="password"
          placeholder="password"
          value={confirmPassword}
          className="relative left-[5%] w-[90%] text-xl"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          className="relative left-[5%] w-[90%] text-xl"
          variant="default"
          size="lg"
          type="submit"
        >
          Signup
        </Button>
        {/* <p className="relative text-center text-xl hover: cursor-pointer">
          Forgot password ?{" "}
        </p> */}
      </form>
    </div>
  );
};

export default AdminLogin;
