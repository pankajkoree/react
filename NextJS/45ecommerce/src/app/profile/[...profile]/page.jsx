"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiMenu } from "react-icons/fi";

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState("nodata");
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      localStorage.removeItem("user");
      toast.success("Logout successfully...");
      router.push("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onGetUserData = async () => {
    const res = await axios.post("/api/users/me");
    setData(res.data.data.username);
  };

  const gotoCart = () => {
    router.push("/carts");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col">
      {/* Main Content Area */}
      <div className="flex flex-grow">
        {/* Sidebar for larger screens */}
        <div className="hidden xl:h-[800px] lg:flex flex-col w-1/4 bg-gray-100 dark:bg-gray-900 p-6 space-y-6">
          <nav className="space-y-8">
            <Button
              variant="link"
              className="w-full text-left xl:text-2xl xl:h-[60px]"
              onClick={gotoCart}
            >
              Carts
            </Button>
            <Button
              variant="link"
              className="w-full text-left xl:text-2xl xl:h-[60px]"
            >
              Orders
            </Button>
            <Button
              variant="link"
              className="w-full text-left xl:text-2xl xl:h-[60px]"
            >
              Personal Details
            </Button>
          </nav>
          <div className="mt-auto">
            <Button
              variant="destructive"
              className="w-full xl:text-2xl xl:h-[60px]"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="lg:hidden p-4">
          {/* Menu icon for mobile */}
          <button onClick={toggleMenu} className="text-3xl">
            <FiMenu />
          </button>

          {/* Sliding menu for mobile (partial width on the left) */}
          <div
            className={`fixed top-0 left-0 z-40 w-2/3 max-w-xs bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg transform ${
              menuOpen
                ? "translate-x-0 translate-y-32"
                : "-translate-x-full translate-y-32"
            } transition-transform duration-300 ease-in-out p-6`}
          >
            <button
              onClick={toggleMenu}
              className="text-xl mb-4 self-end text-gray-800 dark:text-gray-200"
            >
              Close
            </button>
            <nav className="space-y-4">
              <Button
                variant="link"
                className="w-full text-left"
                onClick={() => {
                  gotoCart();
                  toggleMenu();
                }}
              >
                Carts
              </Button>
              <Button
                variant="link"
                className="w-full text-left"
                onClick={toggleMenu}
              >
                Orders
              </Button>
              <Button
                variant="link"
                className="w-full text-left"
                onClick={toggleMenu}
              >
                Personal Details
              </Button>
            </nav>
            <div className="w-full relative flex top-4">
              <Button
                variant="destructive"
                className="w-full"
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
              >
                Logout
              </Button>
            </div>
          </div>

          {menuOpen && (
            <div
              onClick={toggleMenu}
              className="fixed inset-0 bg-black opacity-30 z-30"
            />
          )}
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center w-full lg:w-3/4 p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Profile Page
          </h1>
          <h2 className="text-2xl font-semibold mb-4">
            {data === "nodata" ? (
              "No data available"
            ) : (
              <Button variant="link">
                <Link href={`/profile/${data}`}>{data}</Link>
              </Button>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
