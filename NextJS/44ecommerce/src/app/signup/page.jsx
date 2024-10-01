"use client";

import { use, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      toast.success("Successfully signed up");
      router.push("/login");
    } catch (error) {
      toast.error("Signup failed : ", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="relative flex flex-col justify-center items-center w-[30%] left-[35%] top-5 text-2xl border-2 border-yellow-300 rounded-lg">
      <h1>{loading ? "Processing" : " Signup"}</h1>

      <form className="relative flex flex-col justify-center p-5 gap-4 w-full">
        <Label className="relative flex text-xl left-[5%]">Username</Label>
        <Input
          type="text"
          placeholder="username"
          value={user.user}
          className="relative left-[5%] w-[90%] text-xl"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
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
          type="submit"
          onClick={onSignUp}
        >
          {buttonDisabled ? "No signup" : "Signup"}
        </Button>
      </form>
    </div>
  );
};

export default Signup;
