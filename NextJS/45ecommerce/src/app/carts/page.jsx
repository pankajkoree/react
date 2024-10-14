"use client";

import { useQuery } from "@tanstack/react-query";
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
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
