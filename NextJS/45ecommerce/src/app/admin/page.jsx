"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { FiMenu, FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AdminPage = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Admin");
  const [orderData, setOrderData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [newProduct, setNewProduct] = useState({
    price: "",
    title: "",
    description: "",
    category: "",
    stock: "",
    thumbnail: "",
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSectionChange = async (section) => {
    setSelectedSection(section);
    toggleMenu();

    if (section === "Orders") {
      try {
        const response = await axios.get("/api/products/getOrderedProducts");
        setOrderData(response.data.orders || []);
      } catch (error) {
        toast.error("Error fetching order data:", error.message);
      }
    }

    if (section === "Users") {
      try {
        const response = await axios.get("/api/users/getUser");
        setUserData(response.data.users || []);
      } catch (error) {
        toast.error("Error fetching user data:", error.message);
      }
    }

    if (section === "Products") {
      try {
        const response = await axios.get("/api/products/getProducts");
        setProductData(response.data.results || []);
      } catch (error) {
        toast.error("Error fetching product data:", error.message);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/products/addproducts",
        newProduct
      );
      if (response.data.success) {
        toast.success("Product added successfully!");
        setNewProduct({
          price: "",
          title: "",
          description: "",
          category: "",
          stock: "",
          thumbnail: "",
        });
      } else {
        toast.error("Error adding product: " + response.data.error);
      }
    } catch (error) {
      toast.error("Error adding product:", error.message);
    }
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
              onClick={() => handleSectionChange("Users")}
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
                onClick={() => handleSectionChange("Products")}
              >
                Products
              </Button>
              <Button
                variant="link"
                className="w-full text-left"
                onClick={() => handleSectionChange("Add new products")}
              >
                Add new products
              </Button>
              <Button
                variant="link"
                className="w-full text-left"
                onClick={() => handleSectionChange("Orders")}
              >
                Orders
              </Button>
              <Button
                variant="link"
                className="w-full text-left"
                onClick={() => handleSectionChange("Users")}
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
        <div className="flex flex-col w-full lg:w-3/4 p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            {selectedSection} Page
          </h1>

          <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
            {selectedSection === "Products" && productData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {productData.map((product) => (
                  <div
                    key={product._id}
                    className="border p-4 rounded-lg shadow"
                  >
                    <h2 className="font-semibold">{product.title}</h2>
                    <p>
                      <b> Price:</b> ${product.price}
                    </p>
                    <p>
                      <b> Description: </b>
                      {product.description}
                    </p>
                    <p>
                      <b> tock:</b> {product.stock}
                    </p>
                    <p>
                      <b> Category:</b> {product.category}
                    </p>
                    <p>
                      <b> Rating:</b> {product.rating}
                    </p>
                    <p>
                      <b> Brand:</b> {product.brand}
                    </p>
                    <p>
                      <b> SKU: </b>
                      {product.sku}
                    </p>
                    <p>
                      <b> Warranty:</b> {product.warrantyInformation}
                    </p>
                    <p>
                      <b> Return Policy: </b>
                      {product.returnPolicy}
                    </p>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            ) : selectedSection === "Products" ? (
              <p>No products found.</p>
            ) : selectedSection === "Orders" && orderData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {orderData.map((order) => (
                  <div key={order._id} className="border p-4 rounded-lg shadow">
                    <h2 className="font-semibold">{order.productName}</h2>
                    <p>Quantity: {order.quantity}</p>
                    <p>Price: ${order.productPrice}</p>
                    <p>Delivery Address: {order.deliveryAddress}</p>
                    <p>Ordered Date: {order.orderedDate}</p>
                  </div>
                ))}
              </div>
            ) : selectedSection === "Orders" ? (
              <p>No orders found.</p>
            ) : selectedSection === "Users" && userData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userData.map((user) => (
                  <div key={user._id} className="border p-4 rounded-lg shadow">
                    <h2 className="font-semibold">{user.username}</h2>
                    <p>Email: {user.email}</p>
                    <p>Verified: {user.isVerified ? "Yes" : "No"}</p>
                    <p>Admin: {user.isAdmin ? "Yes" : "No"}</p>
                  </div>
                ))}
              </div>
            ) : selectedSection === "Users" ? (
              <p>No users found.</p>
            ) : (
              selectedSection === "Add new products" && (
                <form onSubmit={handleAddProduct} className="space-y-4">
                  <h2 className="text-xl font-bold">Add New Product</h2>
                  <input
                    type="text"
                    name="title"
                    value={newProduct.title}
                    onChange={handleInputChange}
                    placeholder="Product Title"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="text"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    placeholder="Price"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <textarea
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                  ></textarea>
                  <input
                    type="text"
                    name="category"
                    value={newProduct.category}
                    onChange={handleInputChange}
                    placeholder="Category"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="text"
                    name="stock"
                    value={newProduct.stock}
                    onChange={handleInputChange}
                    placeholder="Stock Quantity"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <input
                    type="text"
                    name="thumbnail"
                    value={newProduct.thumbnail}
                    onChange={handleInputChange}
                    placeholder="Thumbnail URL"
                    required
                    className="p-2 border border-gray-300 rounded w-full"
                  />
                  <Button type="submit" className="w-full mt-4">
                    Add Product
                  </Button>
                </form>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
