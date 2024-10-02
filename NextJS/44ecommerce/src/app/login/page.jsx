"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", user);
      toast.success("login successfully");
      router.push("/profile");
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };
  return (
    <div className="relative flex flex-col justify-center items-center w-[30%] left-[35%] top-5 text-2xl border-2 border-yellow-300 rounded-lg">
      <h1>Login Page</h1>

      <form className="relative flex flex-col justify-center p-5 gap-4 w-full">
        <Label className="relative flex text-xl left-[5%]">Email</Label>
        <Input
          type="email"
          placeholder="email"
          value={user.email}
          className="relative left-[5%] w-[90%] text-xl"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Label className="relative flex text-xl left-[5%]">Password</Label>
        <Input
          type="password"
          placeholder="password"
          value={user.password}
          className="relative left-[5%] w-[90%] text-xl"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button
          className="relative left-[5%] w-[90%] text-xl"
          variant="default"
          size="lg"
          onClick={onLogin}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
