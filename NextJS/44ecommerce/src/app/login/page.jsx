"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminLogin = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-[30%] left-[35%] top-5 text-2xl border-2 border-yellow-300 rounded-lg">
      <h1>Login Page</h1>

      <form className="relative flex flex-col justify-center p-5 gap-4 w-full">
        <Label className="relative flex text-xl left-[5%]">Email</Label>
        <Input
          type="email"
          placeholder="email"
          className="relative left-[5%] w-[90%] text-xl"
        />
        <Label className="relative flex text-xl left-[5%]">Password</Label>
        <Input
          type="password"
          placeholder="password"
          className="relative left-[5%] w-[90%] text-xl"
        />
        <Button
          className="relative left-[5%] w-[90%] text-xl"
          variant="default"
          size="lg"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
