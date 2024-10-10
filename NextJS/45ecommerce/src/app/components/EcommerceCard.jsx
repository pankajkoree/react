"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const EcommerceCard = ({ id, src, alt, title, price, rating }) => {
  const [productId, setProductId] = useState();
  const router = useRouter();
  let floorRating = rating;
  floorRating = Math.floor(floorRating);

  const addedToCart = () => {
    toast.success("added to cart", {
      style: {
        border: "1px solid purple",
        padding: "8px",
        color: "#ffffff",
        background: "#19f57c",
        fontSize: "16px",
      },
      iconTheme: {
        primary: "#3177ff",
        secondary: "#FFFAEE",
      },
    });
  };

  const addedToBuyNow = () => {
    toast.success("item ordered", {
      style: {
        border: "1px solid purple",
        padding: "8px",
        color: "#ffffff",
        background: "#19f57c",
        fontSize: "16px",
      },
      iconTheme: {
        primary: "#3177ff",
        secondary: "#FFFAEE",
      },
    });

    router.push("/buyNow");
  };

  const getData = () => {
    setProductId(id);
  };

  const gotoProduct = () => {
    router.push(`/product/${productId}`);
  };
  return (
    <div
      className="border rounded-lg p-4 shadow-md shadow-indigo-400 dark:shadow-slate-400 dark:shadow-md dark:hover:shadow-lg dark:bg-silver-800 hover:shadow-lg transition-transform duration-200 ease-in-out hover:shadow-green-400 hover:scale-105 overflow-hidden dark:hover:shadow-green-500"
      onClick={getData}
      onDoubleClick={gotoProduct}
    >
      {/* Product thumbnail */}
      <div className="h-48 w-full mb-4">
        <Image
          loading="lazy"
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="object-contain h-full w-full transition-transform duration-200 ease-in-out hover:scale-125"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold">{title}</h2>
      {/* Price and rating */}
      <div className="flex justify-between mt-2">
        <p className="text-xl font-bold">${price}</p>
        <p className="text-sm text-gray-500">{"⭐".repeat(floorRating)}</p>
      </div>
      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <Button
          variant="carting"
          className="text-xl hover:text-white"
          onClick={addedToCart}
        >
          Add to cart
        </Button>
        <Button
          variant="buy"
          className="text-xl hover:text-white"
          onClick={addedToBuyNow}
        >
          Buy now
        </Button>
      </div>
    </div>
  );
};

export default EcommerceCard;