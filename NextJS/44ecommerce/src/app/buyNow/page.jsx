"use client";

import { useState } from "react";

const BuyNowPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handlePurchase = () => {
    // Logic for purchase (e.g., redirect to payment page or API call)
    alert(`Purchased ${quantity} item(s)!`);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-8">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-semibold mb-4 text-center">Buy Now</h1>

        {/* Product Details */}
        <div className="mb-6">
          <img
            src="/path/to/product-image.jpg"
            alt="Product Image"
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold">Product Name</h2>
          <p className="text-lg text-gray-700 mb-4">
            Product description goes here...
          </p>
          <span className="text-xl font-bold">$99.99</span>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center justify-between mb-6">
          <label htmlFor="quantity" className="text-lg">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={handleQuantityChange}
            className="w-20 text-center border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Purchase Button */}
        <button
          onClick={handlePurchase}
          className="w-full bg-blue-500 text-white text-lg font-semibold py-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BuyNowPage;
