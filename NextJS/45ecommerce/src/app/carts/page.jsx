"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";

const getProductsData = async () => {
  try {
    let response = await fetch(
      `http://localhost:3000/api/products/getProducts`
    );
    if (!response.ok) {
      toast.error("failed to fetch...");
    }
    response = await response.json();
    return response;
  } catch (error) {
    toast.error(error);
    return false;
  }
};

const Cart = () => {
  const [specificProduct, setSpecificProduct] = useState({});

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProductsData,
  });

  const cartItem = localStorage.getItem("cart");
  useEffect(() => {
    if (data && cartItem) {
      const foundProduct = data.results.find(
        (product) => product._id === cartItem
      );
      if (foundProduct) {
        setSpecificProduct(foundProduct);
      }
    }
  }, [data, cartItem]);

  console.log(specificProduct);

  if (isFetching) return "fetching the data";

  if (isLoading) return "Loading...";

  if (error) return "Error occurred: " + error.message;
  return (
    <div>
      {specificProduct ? (
        <div className="cart-card flex p-4 border rounded-lg m-4 shadow-md">
          <div className="cart-card__image flex-shrink-0">
            <img
              src="https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png"
              alt="Eyeshadow Palette"
              className="w-24 h-24 object-cover rounded-md"
            />
          </div>

          <div className="cart-card__details flex flex-col justify-between ml-4">
            <h2 className="font-semibold text-lg">
              Eyeshadow Palette with Mirror
            </h2>
            <p className="text-sm text-gray-500">by Glamour Beauty</p>

            <div className="flex items-center justify-between">
              <p className="text-gray-700">
                Price: <span className="font-bold">$19.99</span>
              </p>
              <p className="text-red-500">Discount: 5.5%</p>
            </div>

            <div className="flex items-center mt-2">
              <label htmlFor="quantity" className="mr-2 text-gray-700">
                Qty:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                defaultValue={1}
                min={1}
                className="w-16 border px-2 py-1 rounded-md"
              />
            </div>

            <button className="mt-2 bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600 transition">
              Remove
            </button>
          </div>
        </div>
      ) : (
        "fetching the data"
      )}
    </div>
  );
};

export default Cart;
