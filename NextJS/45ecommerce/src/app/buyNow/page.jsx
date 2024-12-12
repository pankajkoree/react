"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// function handler for accessing data
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

// profile details
const onGetUserData = async () => {
  let res = await axios.post("api/users/me");
  return res.data;
};

const BuyNowPage = () => {
  const router = useRouter();
  const [specificProduct, setSpecificProduct] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState({
    id: "",
    deliveryAddress: "",
    orderedDate: new Date().toLocaleString(),
    productName: "",
    quantity: 1,
    productPrice: 0,
    returnPolicy: specificProduct.returnPolicy || "",
    productDescription: specificProduct.description || "",
    productThumbnail: specificProduct.thumbnail || "",
  });

  const { data } = useQuery({
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

  useEffect(() => {
    const updateProductDetails = async () => {
      const result = await onGetUserData();
      const currentDate = new Date().toLocaleString();

      if (specificProduct && specificProduct._id) {
        setProductDetails((prevDetails) => ({
          ...prevDetails,
          id: result.data._id,
          productName: specificProduct?.title || "",
          quantity: productQuantity,
          productPrice: specificProduct?.price * productQuantity || 0,
          orderedDate: currentDate,
          returnPolicy: specificProduct?.returnPolicy || "",
          productDescription: specificProduct?.description || "",
          productThumbnail: specificProduct?.thumbnail || "",
        }));
      }
    };

    updateProductDetails();
  }, [specificProduct, productQuantity]);

  const increaseQuantity = () => {
    setProductQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (productQuantity === 1) {
      toast.error("Item quantity can't be less than 1");
    } else {
      setProductQuantity((prev) => prev - 1);
    }
  };

  const handlePurchase = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/products/orderedProducts", productDetails);
      toast.success("Ordered successfully");
      router.push("/");
    } catch (error) {
      toast.error("Order failed");
    }
  };

  return (
    <div className="py-4">
      <div className="relative xl:w-[40%] xl:left-[30%] xl:border p-8">
        <h1 className="text-3xl font-semibold mb-4 text-center">Buy Now</h1>

        <div className="mb-6">
          <div className="relative flex justify-center">
            <img
              loading="lazy"
              src={specificProduct?.thumbnail}
              alt="Product Image"
              width={200}
              height={120}
              className="object-cover rounded-md mb-4"
              layout="responsive"
            />
          </div>
          <h2 className="text-2xl font-bold">{specificProduct?.title}</h2>
          <p className="text-gray-700 mb-4">{specificProduct?.description}</p>
          <div>
            <p className="xl:text-xl xl:text-center">
              Quantity:{" "}
              <Button
                variant="quantity"
                className="xl:text-2xl"
                onClick={decreaseQuantity}
              >
                -
              </Button>{" "}
              <span className="xl:text-2xl xl:p-2">{productQuantity}</span>{" "}
              <Button
                variant="quantity"
                className="xl:text-2xl"
                onClick={increaseQuantity}
              >
                +
              </Button>
            </p>
          </div>
          <span className="text-xl font-bold">
            ${productDetails.productPrice}
          </span>
        </div>
      </div>

      <div className="relative flex xl:top-4 xl:w-[40%] xl:left-[30%]">
        <Label
          htmlFor="deliveryAddress"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Delivery Address
        </Label>
        <Input
          id="deliveryAddress"
          type="text"
          placeholder="Delivery address..."
          value={productDetails.deliveryAddress || ""}
          onChange={(e) =>
            setProductDetails({
              ...productDetails,
              deliveryAddress: e.target.value,
            })
          }
          required
        />
      </div>

      <div className="relative flex xl:top-8 xl:w-[40%] xl:left-[30%] xl:border">
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
