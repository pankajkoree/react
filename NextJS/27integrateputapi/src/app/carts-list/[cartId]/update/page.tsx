"use client";

import { useEffect, useState } from "react";
import "./style.css";

interface Params {
  id: string;
}

interface ApiResponse {
  success: boolean;
}

const UpdateInfo = ({ params }: { params: Params }) => {
  const cartID = params.id;
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const getProductInfo = async () => {
      let data = await fetch(`http://localhost:3000/api/carts/${cartID}`);
      data = await data.json();
      setUserId(userId);
    };
    getProductInfo();
  }, [cartID]);

  const update = async () => {
    let data: ApiResponse = await fetch(
      `http://localhost:3000/api/carts/${cartID}`,
      {
        method: "PUT",
        body: JSON.stringify({ userId }),
      }
    ).then((res) => res.json());

    if (data.success) {
      alert("Updated successfully!!!");
    } else {
      alert("Try again...");
    }
  };

  return (
    <>
      <h1 className="relative flex justify-center text-center p-2 text-3xl bg-green-700 text-white">
        Updating the cart content
      </h1>

      <div className="relative flex flex-col items-center bg-blue-200 h-[250px] w-[20%] left-[40%] top-2 rounded-lg">
        <input
          type="text"
          placeholder="user ID"
          value={userId}
          className="relative w-[80%] border-2 border-white rounded-lg p-2 text-xl top-8 bg-blue-200"
          onChange={(e) => setUserId(e.target.value)}
        />

        <button className="animated-button relative top-16" onClick={update}>
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">Udpate</span>
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
    </>
  );
};

export default UpdateInfo;
