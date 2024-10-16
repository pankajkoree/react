"use client";

import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
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

  // quantity
  const [productquantity, setProductQuantity] = useState(1);
  // increase quantity button event
  const increaseQuantity = () => {
    setProductQuantity(() => productquantity + 1);
  };

  // decrease quantity button event
  const decreaseQuantity = () => {
    if (productquantity === 1) {
      toast.error("item quantity can't be less than 1");
    } else {
      setProductQuantity(() => productquantity - 1);
    }
  };

  // delete button click event
  const deleteProduct = () => {
    localStorage.removeItem("cart");
  };

  // buy now button click event
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

  // for calculating the total amount in the cart
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const amount = productquantity * specificProduct?.price;
    setTotal(amount);
  }, [productquantity, specificProduct]);

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
          <div className="relative flex border border-purple-300 hover:shadow-green-400 xl:m-4 xl:p-4 xl:w-[60%] xl:left-[20%] xl:shadow-md dark:hover:xl:shadow-green-300">
            {/* product thumbnail */}
            <div className="relative flex min-w-[40%] justify-center">
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
                  layout="responsive"
                />
              )}
            </div>

            <div className="relative flex flex-col gap-4 p-2">
              <h2 className="xl:text-2xl xl:font-bold">
                {specificProduct.title}
              </h2>
              <h3 className="xl:text-xl ">{specificProduct.description}</h3>
              <h3 className="xl:text-2xl xl:font-bold">
                ${specificProduct.price}
              </h3>
              <p className="text-green-400">
                {specificProduct.availabilityStatus}
              </p>
              <div>
                <p className="xl:text-xl xl:text-center">
                  Quantity :{" "}
                  <Button
                    variant="outline"
                    className="xl:text-2xl"
                    onClick={decreaseQuantity}
                  >
                    -
                  </Button>{" "}
                  <span className="xl:text-2xl">
                    {" "}
                    {` ${productquantity} `}{" "}
                  </span>{" "}
                  <Button
                    variant="outline"
                    className="xl:text-2xl"
                    onClick={increaseQuantity}
                  >
                    +
                  </Button>{" "}
                </p>
              </div>
              <Button
                variant="delete"
                className="text-xl hover:text-white"
                onClick={deleteProduct}
              >
                Delete
              </Button>
              <Button
                variant="buy"
                className="text-xl hover:text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  addedToBuyNow();
                }}
              >
                Buy now
              </Button>
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
      <div className="relative flex border border-purple-300 xl:m-4 xl:p-4 xl:w-[60%] xl:left-[20%] xl:shadow-md">
        <h2 className="xl:ml-auto xl:text-xl">Total : ${total}</h2>
      </div>
    </div>
  );
};

export default Cart;
