"use client";

import { Button } from "@/components/ui/button";
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

  const [productquantity, setProductQuantity] = useState(1);
  const increaseQuantity = () => {
    setProductQuantity(() => productquantity + 1);
  };

  const decreaseQuantity = () => {
    setProductQuantity(() => productquantity - 1);
  };

  const deleteProduct = () => {
    localStorage.removeItem("cart");
  };

  if (isFetching)
    return (
      <div className="relative flex justify-center top-8 text-xl">
        <h1>Fetching the items...</h1>
      </div>
    );

  if (isLoading) return "Loading...";

  if (error) return "Error occurred: " + error.message;
  return (
    <div>
      {specificProduct ? (
        cartItem ? (
          <div className="relative flex xl:m-4 xl:p-4 xl:w-[80%] xl:left-[10%] xl:shadow-md dark:hover:xl:shadow-blue-600 dark:border dark:border-green-300">
            {/* product thumbnail */}
            <div className="relative flex w-[30%] justify-center">
              {specificProduct?.thumbnail && (
                <Image
                  src={specificProduct.thumbnail}
                  alt={specificProduct.title || "Product Image"}
                  width={200}
                  height={120}
                  className="drop-shadow-xl"
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3))",
                  }}
                />
              )}
            </div>
            <div className="relative flex flex-col">
              <h2>{specificProduct.title}</h2>
              <h3>{specificProduct.description}</h3>
              <p>{specificProduct.availabilityStatus}</p>
              <div>
                <p>
                  Quantity : <Button onClick={decreaseQuantity}>-</Button>{" "}
                  <span>{productquantity}</span>
                  <Button onClick={increaseQuantity}>+</Button>{" "}
                </p>
                <Button onClick={deleteProduct}>Delete</Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex justify-center top-8 text-xl">
            <h1>Cart is Empty</h1>
          </div>
        )
      ) : (
        <div className="relative flex justify-center top-8 text-xl">
          <h1>Fetching the items...</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
