"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const page = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDafault();
    console.log(username, password);
  };
  return (
    <>
      <div className="relative flex flex-col justify-center items-center w-[30%] left-[35%] top-5 text-2xl border-2 border-yellow-300 rounded-lg">
        <h1>Login Page</h1>

        <form
          className="relative flex flex-col justify-center p-5 gap-4 w-full"
          onSubmit={handleSubmit}
        >
          <Label className="relative flex text-xl left-[5%]">Username</Label>
          <Input
            type="text"
            placeholder="username"
            value={username}
            className="relative left-[5%] w-[90%] text-xl"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label className="relative flex text-xl left-[5%]">Password</Label>
          <Input
            type="password"
            placeholder="password"
            value={password}
            className="relative left-[5%] w-[90%] text-xl"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="relative left-[5%] w-[90%] text-xl"
            variant="login"
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default page;
