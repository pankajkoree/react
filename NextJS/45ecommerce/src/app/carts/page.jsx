"use client";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import EcommerceCard from "./EcommerceCard";

const getProductsData = async () => {
  try {
    let response = await fetch(
      `http://localhost:3000/api/products/getProducts`
    );
    if (!response.ok) {
      toast.error("Failed to fetch...");
    }
    response = await response.json();
    return response;
  } catch (error) {
    toast.error(error.message);
    return false;
  }
};

const UserView = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);
  const [buyNowItem, setBuyNowItem] = useState(null);

  const { data, isLoading, isError } = useQuery("getProducts", getProductsData);

  // Load cart from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Save cart to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productId) => {
    if (!cartItems.includes(productId)) {
      setCartItems((prevItems) => [...prevItems, productId]);
      toast.success("Added to cart");
    }
  };

  const addToBuyNow = (productId) => {
    setBuyNowItem(productId);
    router.push("/buyNow");
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products.</div>;

  return (
    <div className="userview">
      {data?.results?.map((product) => (
        <EcommerceCard
          key={product._id}
          id={product._id}
          src={product.thumbnail}
          alt={product.title}
          title={product.title}
          price={product.price}
          rating={product.rating}
          addToCart={addToCart} // Ensure it's passed correctly here
          addToBuyNow={addToBuyNow}
        />
      ))}
    </div>
  );
};

export default UserView;
