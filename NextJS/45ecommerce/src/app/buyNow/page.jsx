"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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

const BuyNowPage = () => {
  const router = useRouter();
  const [specificProduct, setSpecificProduct] = useState({});

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProductsData,
  });
  const buyProductId = localStorage.getItem("buyProduct");

  useEffect(() => {
    if (data && buyProductId) {
      const foundProduct = data.results.find(
        (product) => product._id === buyProductId
      );

      if (foundProduct) {
        setSpecificProduct(foundProduct);
      }
    }
  }, [buyProductId, data]);

  const handlePurchase = () => {
    toast.success("item ordered...");
    router.push("/");
  };

  return (
    <div className="py-8">
      <div className="relative xl:w-[40%] xl:left-[30%] xl:border p-8">
        <h1 className="text-3xl font-semibold mb-4 text-center">Buy Now</h1>

        {/* Product Details */}
        <div className="mb-6">
          <div className="relative flex justify-center">
            <img
              loading="lazy"
              src={specificProduct.thumbnail}
              alt="Product Image"
              width={200}
              height={120}
              className="object-cover rounded-md mb-4"
              layout="responsive"
            />
          </div>
          <h2 className="text-2xl font-bold">{specificProduct.title}</h2>
          <p className="text-gray-700 mb-4">{specificProduct.description} </p>
          <span className="text-xl font-bold">$99.99</span>
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
