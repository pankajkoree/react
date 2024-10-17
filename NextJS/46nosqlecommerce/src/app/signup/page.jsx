"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";

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
      toast.error("Signup failed");
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
    <div className="flex items-center justify-center p-5">
      <div className="bg-white dark:bg-gray-800 hover:shadow-md hover:shadow-green-400 border-2 border-gray-700 transition-all duration-300 animate-border-animatio rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 dark:text-white">
          Create an Account
        </h1>

        <form className="space-y-6" onSubmit={onSignUp}>
          <div>
            <Label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={user.username}
              className="mt-1 border rounded-lg p-3 w-full focus:ring-yellow-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />
          </div>

          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={user.email}
              className="mt-1 border rounded-lg p-3 w-full focus:ring-yellow-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>

          <div>
            <Label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={user.password}
              className="mt-1 border rounded-lg p-3 w-full focus:ring-yellow-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>

          <Button type="submit" variant="auth" className="w-full">
            {loading ? "Signing up..." : "Sign Up"}
          </Button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="hover:underline text-blue-400">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
