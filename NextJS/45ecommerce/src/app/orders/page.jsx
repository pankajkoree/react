"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const OrderDetails = () => {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get("/api/orders/12345");
        setOrderData(response.data);
      } catch (error) {
        console.error("Error fetching order data:", error.message);
      }
    };

    fetchOrderData();
  }, []);

  if (!orderData) {
    return <p>Loading order details...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Order Details</h1>

      {/* List of products */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {orderData.products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            {/* Product Thumbnail */}
            <Image
              src={product.thumbnail || placeholderImage}
              alt={product.title}
              width={200}
              height={200}
              className="rounded-lg mb-4"
            />

            {/* Product Title */}
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {product.title}
            </h2>

            {/* Product Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {product.description}
            </p>

            {/* Product Price */}
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Price: ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Delivery Address */}
      <div className="mt-10 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Delivery Address
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-bold">Name:</span>{" "}
          {orderData.deliveryAddress.name}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-bold">Street:</span>{" "}
          {orderData.deliveryAddress.street}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-bold">City:</span>{" "}
          {orderData.deliveryAddress.city}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-bold">Postal Code:</span>{" "}
          {orderData.deliveryAddress.postalCode}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-bold">Country:</span>{" "}
          {orderData.deliveryAddress.country}
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;
