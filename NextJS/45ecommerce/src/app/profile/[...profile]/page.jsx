"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { FiMenu, FiUser } from "react-icons/fi";

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserIcon, setShowUserIcon] = useState(false);

  useEffect(() => {
    if (data) {
      localStorage.setItem("usersData", JSON.stringify(data));
    }
  }, [data]);

  const logout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      try {
        await axios.get("/api/users/logout");
        localStorage.removeItem("usersData");
        localStorage.removeItem("user");
        toast.success("Logout successfully...");
        router.push("/login");
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const onGetUserData = async () => {
    try {
      const res = await axios.post("/api/users/me");
      setData(res.data);
      setShowUserIcon(true);
    } catch (error) {
      toast.error("Failed to fetch user data");
    }
  };

  const gotoCart = () => {
    router.push("/carts");
  };

  const gotoOrder = () => {
    router.push("/orders");
  };

  const gotoVerifyEmail = () => {
    router.push("/verifyEmail");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col">
      {/* Main Content Area */}
      <div className="flex flex-grow">
        {/* Sidebar for larger screens */}
        <div className="hidden xl:h-[800px] lg:h-[800px] lg:flex flex-col w-1/4 bg-gray-100 dark:bg-gray-900 p-6 space-y-6">
          <nav className="space-y-8 mt-4">
            <Button
              variant="link"
              className="w-full text-left xl:text-2xl xl:h-[60px] lg:text-xl lg:h-[50px]"
              onClick={gotoCart}
            >
              Carts
            </Button>
            <Button
              variant="link"
              className="w-full text-left xl:text-2xl xl:h-[60px] lg:text-xl lg:h-[50px]"
              onClick={gotoOrder}
            >
              Orders
            </Button>
            <Button
              variant="link"
              className="w-full text-left xl:text-2xl xl:h-[60px] lg:text-xl lg:h-[50px]"
              onClick={gotoVerifyEmail}
            >
              Verify Email
            </Button>
            <Button
              variant="link"
              className="w-full text-left xl:text-2xl xl:h-[60px] lg:text-xl lg:h-[50px]"
              onClick={onGetUserData}
            >
              Personal Details
            </Button>
          </nav>
          <div className="mt-auto">
            <Button
              variant="destructive"
              className="w-full xl:text-2xl xl:h-[60px] lg:text-xl lg:h-[50px]"
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
                onClick={() => {
                  gotoOrder();
                  toggleMenu();
                }}
              >
                Orders
              </Button>
              <Button
                variant="link"
                className="w-full text-left"
                onClick={() => {
                  gotoVerifyEmail();
                  toggleMenu();
                }}
              >
                Verify Email
              </Button>
              <Button
                variant="link"
                className="w-full text-left"
                onClick={() => {
                  onGetUserData();
                  toggleMenu();
                }}
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
          {showUserIcon && (
            <FiUser className="text-5xl text-gray-900 dark:text-white mb-4" />
          )}
          <h2 className="text-2xl font-semibold mb-4">
            {data ? (
              Object.keys(data).length === 0 ? (
                "No data available"
              ) : (
                <p>{data.data.username}</p>
              )
            ) : (
              "No data available"
            )}
          </h2>
          {data && (
            <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                User Details
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-bold">Email:</span> {data.data.email}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-bold">User ID:</span> {data.data._id}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-bold">Admin:</span>{" "}
                {data.data.isAdmin ? "Yes" : "No"}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-bold">Verified:</span>{" "}
                {data.data.isVerified ? "Yes" : "No"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
