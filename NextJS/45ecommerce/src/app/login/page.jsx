"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/users/login", user);
      if (response.status === 200 && response.data.user) {
        login(response.data.user);
        toast.success("Login successful");
        router.push(`/profile/${response.data.user.id}`);
      } else {
        toast.error("Failed to retrieve valid user data");
      }
    } catch (error) {
      toast.error("Invalid credentials", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5 ">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8 w-full max-w-sm hover:shadow-md hover:shadow-green-400 border-2 border-gray-700 transition-all duration-300 animate-border-animation">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Login
        </h1>

        <form className="flex flex-col gap-4" onSubmit={onLogin}>
          <div>
            <Label
              htmlFor="email"
              className="text-lg font-semibold text-gray-900 dark:text-white"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={user.email}
              className="mt-1 border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>

          <div>
            <Label
              htmlFor="password"
              className="text-lg font-semibold text-gray-900 dark:text-white"
            >
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={user.password}
              className="mt-1 border rounded-lg p-2 focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>

          <Button
            type="submit"
            className={`mt-4 w-full text-xl ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            variant="default"
            size="lg"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

          <p className="text-sm text-center mt-4 text-gray-700 dark:text-gray-300">
            Forgot{" "}
            <Link
              href={`/forgotCredentials`}
              className="text-blue-500 hover:underline"
            >
              username/password?
            </Link>
          </p>
          <p className="text-sm text-center text-gray-700 dark:text-gray-300">
            Don't have an account?{" "}
            <Link href={`/signup`} className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
