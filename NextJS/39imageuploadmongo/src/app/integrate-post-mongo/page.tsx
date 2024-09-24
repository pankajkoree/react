"use client";
import { useState } from "react";
import "./buttonStyle.css";
import Link from "next/link";

type ApiResponse = {
  success: boolean;
  message?: string;
};

const page = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handlePost = async () => {
    // <!-------------calculating the total amount---------------!>
    const priceNumber = Number(price);
    const quantityNumber = Number(quantity);
    let total;
    if (!isNaN(priceNumber) && !isNaN(quantityNumber)) {
      total = priceNumber * quantityNumber;
    } else {
      console.error("Price and quantity should be valid numbers");
    }
    // <!-------------calculating the total amount---------------!>

    let response = await fetch("http://localhost:3000/api/db-ecommerce-2", {
      method: "POST",
      body: JSON.stringify({ title, price, quantity, total }),
    });

    const data: ApiResponse = await response.json();

    if (data.success) {
      alert("data posted successfully ❤️");
      setTitle("");
      setPrice("");
      setQuantity("");
    } else {
      alert("Try again 😭");
    }
  };
  return (
    <>
      <h1 className="relative flex justify-center text-center p-2 text-3xl bg-blue-100 text-fuchsia-600">
        Integrate Post Method with Mongo DB
      </h1>

      <div className="relative flex flex-col bg-purple-400 p-2 gap-4 w-[30%] left-[35%] top-5 h-[300px] items-center rounded-lg">
        <input
          type="text"
          placeholder="title"
          value={title}
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          className="relative w-[80%] h-[15%] p-2 text-xl rounded-lg"
        />
        <input
          type="text"
          placeholder="price"
          value={price}
          id="price"
          onChange={(e) => setPrice(e.target.value)}
          className="relative w-[80%] h-[15%] p-2 text-xl rounded-lg"
        />
        <input
          type="text"
          placeholder="quantity"
          value={quantity}
          id="quantity"
          onChange={(e) => setQuantity(e.target.value)}
          className="relative w-[80%] h-[15%] p-2 text-xl rounded-lg"
        />

        <button
          className="animated-button relative top-8 w-[25%]"
          onClick={handlePost}
        >
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Post</span>
          <span className="circle"></span>
          <svg
            viewBox="0 0 24 24"
            className="arr-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>

      <div className="relative top-8 p-2 border-2 w-[15%] text-center rounded-lg border-purple-400 left-[42.5%]">
        <Link href={"/home"}> ⬅️ Bact to Home</Link>
      </div>
    </>
  );
};

export default page;
