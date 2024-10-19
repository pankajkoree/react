"use client";

import { Button } from "@/components/ui/button";
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

const SpecificProductPage = ({ params }) => {
  const router = useRouter();
  const [specificProduct, setSpecificProduct] = useState({});
  let productIds = [];
  let buyProductId = [];

  const addedToCart = () => {
    productIds.push(specificProduct._id);

    localStorage.setItem("cart", productIds);

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
    buyProductId.push(specificProduct._id);

    localStorage.setItem("buyProduct", buyProductId);
    router.push("/buyNow");
  };

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProductsData,
  });

  useEffect(() => {
    if (data && params?.product?.[0]) {
      const foundProduct = data.results.find(
        (product) => product._id === params.product[0]
      );
      if (foundProduct) {
        setSpecificProduct(foundProduct);
      }
    }
  }, [data, params]);

  if (isFetching) return "fetching the data";

  if (isLoading) return "Loading...";

  if (error) return "Error occurred: " + error.message;

  return (
    <div className="relative top-4 mb-8 container mx-auto p-4 shadow-sm shadow-green-800 dark:shadow-green-300 hover:shadow-lg hover:shadow-green-300 dark:hover:shadow-blue-200 rounded-lg text-gray-900 dark:text-white ">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2 h-[745px]">
          <img
            loading="lazy"
            src={specificProduct.images?.[0]}
            alt={specificProduct.title}
            className="relative left-[5%] top-[5%] w-[90%] h-[90%] rounded-lg shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-4">
          {/* Title and Rating */}
          <div>
            <h1 className="text-3xl font-bold ">{specificProduct.title}</h1>
            <p className="text-yellow-500">
              {Array(specificProduct.rating).fill("⭐").join(" ")} (
              {specificProduct.rating} / 5)
            </p>
          </div>

          {/* Description */}
          <p>{specificProduct.description}</p>

          {/* Product Details Table */}
          <div className="border-t pt-4">
            <h2 className="text-xl font-semibold mb-2">Product Details</h2>
            <table className="w-full text-left">
              <tbody>
                <tr>
                  <th className="pr-4 py-2">Brand:</th>
                  <td className="py-2">{specificProduct.brand}</td>
                </tr>
                <tr>
                  <th className="pr-4 py-2">Weight:</th>
                  <td className="py-2">{specificProduct.weight} kg</td>
                </tr>
                <tr>
                  <th className="pr-4 py-2">Discount:</th>
                  <td className="py-2">
                    {specificProduct.discountPercentage
                      ? `available discount : ${specificProduct.discountPercentage} %`
                      : "No discount"}
                  </td>
                </tr>
                <tr>
                  <th className="pr-4 py-2">Warranty:</th>
                  <td className="py-2">
                    {specificProduct.warrantyInformation}
                  </td>
                </tr>
                <tr>
                  <th className="pr-4 py-2">Availability:</th>
                  <td className="py-2">
                    {specificProduct.availabilityStatus
                      ? `${specificProduct.availabilityStatus}`
                      : "Out of Stock"}
                  </td>
                </tr>
                <tr>
                  <th className="pr-4 py-2">Price:</th>
                  <td className="py-2 text-xl font-bold">
                    ${specificProduct.price}
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <Button
                variant="carting"
                className="text-2xl p-4 dark:hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  addedToCart();
                }}
              >
                Add to cart
              </Button>
              <Button
                variant="buy"
                className="text-2xl p-4 dark:hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  addedToBuyNow();
                }}
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ul>
        <li className="text-3xl font-bold ">Reviews:</li>
        {specificProduct?.reviews?.map((review, index) => (
          <li
            key={index}
            className="relative flex flex-col border border-green-200 p-4 mb-2"
          >
            <p>Reviewer: {review.reviewerName}</p>
            <p>Email: {review.reviewerEmail}</p>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <p>Date: {new Date(review.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecificProductPage;
