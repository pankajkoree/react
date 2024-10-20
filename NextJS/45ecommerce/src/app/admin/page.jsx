"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FiMenu, FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserIcon, setShowUserIcon] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Admin");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
    toggleMenu();
  };

  const exitFromAdmin = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col">
      {/* Main Content Area */}
      <div className="flex flex-grow">
        {/* Sidebar for larger screens */}
        <div className="hidden min-h-screen lg:flex flex-col w-1/4 bg-gray-100 dark:bg-gray-900 p-6 space-y-6">
          <nav className="space-y-8">
            <Button
              variant="link"
              className="w-full text-left xl:text-2xl xl:h-[60px] lg:text-xl lg:h-[50px]"
              onClick={() => handleSectionChange("Products")}
            >
              Products
            </Button>
            <Button
              variant="link"
              className="w-full text-left xl:text-2xl xl:h-[60px] lg:text-xl lg:h-[50px]"
              onClick={() => handleSectionChange("Add new products")}
            >
              Add new Products
            </Button>
            <Button
              variant="link"
              className="w-full text-left xl:text-2xl xl:h-[60px] lg:text-xl lg:h-[50px]"
              onClick={() => handleSectionChange("Orders")}
            >
              Orders
            </Button>
            <Button
              variant="link"
              className="w-full text-left xl:text-2xl xl:h-[60px] lg:text-xl lg:h-[50px]"
              onClick={() => handleSectionChange("User Details")}
            >
              Users
            </Button>
          </nav>
          <div className="mt-auto">
            <Button
              variant="destructive"
              className="w-full xl:text-2xl xl:h-[60px] lg:text-xl lg:h-[50px]"
              onClick={exitFromAdmin}
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

          {/* Sliding menu for mobile */}
          <div
            className={`fixed top-0 left-0 z-40 w-2/3 max-w-xs bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg transform ${
              menuOpen
                ? "translate-x-0 translate-y-20"
                : "-translate-x-full translate-y-20"
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
                onClick={() => handleSectionChange("products")}
              >
                Products
              </Button>
              <Button
                variant="link"
                className="w-full text-left"
                onClick={() => handleSectionChange("add new products")}
              >
                Add new products
              </Button>
              <Button
                variant="link"
                className="w-full text-left"
                onClick={() => handleSectionChange("orders")}
              >
                Orders
              </Button>
              <Button
                variant="link"
                className="w-full text-left"
                onClick={() => handleSectionChange("users")}
              >
                Users
              </Button>
            </nav>
            <div className="w-full relative flex top-4">
              <Button
                variant="destructive"
                className="w-full"
                onClick={exitFromAdmin}
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
            {selectedSection} Page
          </h1>
          {showUserIcon && (
            <FiUser className="text-5xl text-gray-900 dark:text-white mb-4" />
          )}

          <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
