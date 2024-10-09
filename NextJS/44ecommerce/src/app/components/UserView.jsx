"use client";

import { useEffect, useState } from "react";
import EcommerceCard from "./EcommerceCard";
import "./style.scss";

const getProductsData = async () => {
  try {
    let response = await fetch(
      "http://localhost:3000/api/products/getProducts"
    );
    response = await response.json();
    if (response.success) {
      return response.results;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

const UserView = () => {
  const [products, setProducts] = useState(null);

  const cells = 4;
  const cellsArray = [];

  // Generate the grid cells and their classes
  for (let i = 0; i < cells; i++) {
    for (let j = 0; j < cells; j++) {
      cellsArray.push(`d-${i + j}`);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsData();
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="relative grid md:grid-cols-3 gap-8 top-8 px-8 max-w-full">
      {products && products.length > 0 ? (
        products.map((product) => (
          <EcommerceCard
            key={product?.id}
            id={product._id}
            src={product?.thumbnail}
            alt={product?.title}
            title={product?.title}
            price={product?.price}
            rating={product?.rating}
          />
        ))
      ) : (
        <div className="relative flex flex-col items-center left-[100%] top-[70%] gap-8 text-3xl">
          <div className="mosaic-loader">
            {cellsArray.map((cellClass, index) => (
              <div key={index} className={`cell ${cellClass}`} />
            ))}
          </div>
          <div>
            <h1>Loading...</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserView;
