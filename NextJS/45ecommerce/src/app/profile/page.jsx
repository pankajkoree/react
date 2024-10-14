"use client";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState("nodata");

  const logout = async () => {
    try {
      const res = await axios.get("/api/users/logout");
      localStorage.removeItem("user");
      toast.success("Logout successfully...");
      router.push("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onGetUserData = async () => {
    const res = await axios.post("api/users/me");
    setData(res.data.data.username);
  };
  return (
    <div className="relative flex flex-col items-center mb-8">
      <h1>Profile page</h1>
      <h2>
        {data === "nodata" ? (
          "no data"
        ) : (
          <Button variant="link">
            <Link href={`/profile/${data}`}>{data}</Link>
          </Button>
        )}
      </h2>
      <br />
      <br />
      <Button variant="fetch" onClick={onGetUserData}>
        Get User Details
      </Button>
      <br />
      <br />

      <Button variant="destructive" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default ProfilePage;
