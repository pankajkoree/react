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
    router.push("/buyNow");
  };

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
    <div className="container mx-auto p-2">
      {specificProduct ? (
        cartItem ? (
          <div className="relative flex flex-col sm:flex-row border border-purple-300 hover:shadow-green-400 sm:xl:m-4 sm:xl:p-4 sm:xl:w-[60%] sm:xl:left-[20%] sm:xl:shadow-md dark:hover:xl:shadow-green-300 p-2 mx-2">
            {/* product thumbnail */}
            <div className="relative flex justify-center sm:min-w-[40%] mb-4 sm:mb-0">
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

            <div className="flex flex-col gap-4 sm:p-2">
              <h2 className="text-lg sm:text-2xl font-bold">
                {specificProduct.title}
              </h2>
              <h3 className="text-base sm:text-xl">
                {specificProduct.description}
              </h3>
              <h3 className="text-lg sm:text-2xl font-bold">
                ${specificProduct.price}
              </h3>
              <p className="text-green-400">
                {specificProduct.availabilityStatus}
              </p>
              <div>
                <p className="text-base sm:text-xl text-center">
                  Quantity:{" "}
                  <Button
                    variant="quantity"
                    className="text-lg sm:text-2xl"
                    onClick={decreaseQuantity}
                  >
                    -
                  </Button>{" "}
                  <span className="text-lg sm:text-2xl p-2">{` ${productquantity} `}</span>{" "}
                  <Button
                    variant="quantity"
                    className="text-lg sm:text-2xl"
                    onClick={increaseQuantity}
                  >
                    +
                  </Button>{" "}
                </p>
              </div>
              <Button
                variant="delete"
                className="text-base sm:text-xl hover:text-white"
                onClick={deleteProduct}
              >
                Delete
              </Button>
              <Button
                variant="buy"
                className="text-base sm:text-xl hover:text-white"
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

      {cartItem ? (
        <div className="relative flex border border-purple-300 sm:xl:m-4 sm:xl:p-4 sm:xl:w-[60%] sm:xl:left-[20%] sm:xl:shadow-md mx-2 top-2 p-2">
          <h2 className="ml-auto text-lg sm:text-xl">{`Total: $ ${total}`}</h2>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default Cart;
