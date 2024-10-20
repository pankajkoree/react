"use client";

import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("dashboard");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeContent) {
      case "addProduct":
        return <div>Add Product Form</div>; // Replace with actual Add Product component
      case "updateProduct":
        return <div>Update Product Form</div>; // Replace with actual Update Product component
      case "orderDetails":
        return <div>Order Details Table</div>; // Replace with actual Fetch Order Details component
      case "userDetails":
        return <div>User Details Table</div>; // Replace with actual Fetch User Details component
      default:
        return <div>Welcome to the Admin Dashboard!</div>;
    }
  };

  useEffect(() => {
    // Close the sidebar when window resizes back to large
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col xl:h-[800px] lg:h-[800px] md:h-[800px] mt-4">
      {/* Main content wrapper */}
      <div className="flex flex-1">
        {/* Sidebar for larger screens (hidden on mobile) */}
        <div
          className={`hidden lg:flex lg:fixed inset-y-0 left-0 lg:static lg:w-1/5 z-40 bg-gray-800 text-white p-5 transition-transform duration-300 ease-in-out`}
          style={{ maxHeight: "calc(100vh - 8rem)" }} // To account for header and footer
        >
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => setActiveContent("addProduct")}
              className="text-lg font-semibold hover:text-gray-300"
            >
              Add Product
            </button>
            <button
              onClick={() => setActiveContent("updateProduct")}
              className="text-lg font-semibold hover:text-gray-300"
            >
              Update Product
            </button>
            <button
              onClick={() => setActiveContent("orderDetails")}
              className="text-lg font-semibold hover:text-gray-300"
            >
              Fetch Order Details
            </button>
            <button
              onClick={() => setActiveContent("userDetails")}
              className="text-lg font-semibold hover:text-gray-300"
            >
              Fetch User Details
            </button>
            <button
              onClick={() => console.log("Logout")}
              className="mt-auto text-lg font-semibold hover:text-gray-300"
            >
              Logout
            </button>
          </nav>
        </div>

        {/* Menu Icon for Mobile */}
        <div className="lg:hidden p-4">
          <button onClick={toggleSidebar} className="text-3xl">
            <FaBars />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-1/5 p-8">{renderContent()}</div>

        {/* Sidebar Overlay for Mobile (only displayed when isSidebarOpen is true) */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>

      {/* Mobile Sidebar with auto height based on content (only for mobile devices) */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 bg-gray-800 text-white p-5 lg:hidden z-50 transition-transform duration-300 ease-in-out w-[40%] overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => setActiveContent("addProduct")}
              className="text-lg font-semibold hover:text-gray-300"
            >
              Add Product
            </button>
            <button
              onClick={() => setActiveContent("updateProduct")}
              className="text-lg font-semibold hover:text-gray-300"
            >
              Update Product
            </button>
            <button
              onClick={() => setActiveContent("orderDetails")}
              className="text-lg font-semibold hover:text-gray-300"
            >
              Fetch Order Details
            </button>
            <button
              onClick={() => setActiveContent("userDetails")}
              className="text-lg font-semibold hover:text-gray-300"
            >
              Fetch User Details
            </button>
            <button
              onClick={() => console.log("Logout")}
              className="mt-auto text-lg font-semibold hover:text-gray-300"
            >
              Logout
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default AdminLayout;
