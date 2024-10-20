"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const OrderDetails = () => {
  const [orderData, setOrderData] = useState(null);
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const response = await axios.get("/api/products/getOrderedProducts");
        setOrderData(response.data);
      } catch (error) {
        console.error("Error fetching order data:", error.message);
      }
    };

    fetchOrderData();
  }, []);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (orderData && userData) {
      const filtered = orderData.orders.filter(
        (order) => order.id === userData.id
      );
      setFilteredOrders(filtered);
    }
  }, [orderData]);

  if (!orderData) {
    return <p>Loading order details...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Order Details</h1>

      {/* List of filtered orders */}
      <div className="flex flex-col items-center gap-6">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <div
              key={order._id}
              className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full max-w-4xl border border-green-200"
              style={{ width: "60%", margin: "0 auto" }}
            >
              {/* Product Information */}
              <div className="flex flex-col md:flex-row items-start gap-4">
                {/* Thumbnail */}
                <Image
                  src={order.productThumbnail}
                  alt={order.productName}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />

                {/* Product Details */}
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {order.productName}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    {order.productDescription}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Quantity: {order.quantity}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Return Policy: {order.returnPolicy}
                  </p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    Price: ${order.productPrice}
                  </p>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Delivery Address
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {order.deliveryAddress}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Ordered Date: {order.orderedDate}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-700 dark:text-gray-300 m-auto">
            No orders found for this user.
          </p>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
