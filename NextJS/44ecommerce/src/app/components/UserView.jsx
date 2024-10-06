"use client";

import { useEffect, useState } from "react";
import EcommerceCard from "./EcommerceCard";

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsData();
      setProducts(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 top-4 px-2 max-w-full">
      {products && products.length > 0 ? (
        products.map((product) => (
          <EcommerceCard
            key={product?.id}
            src={product?.thumbnail}
            alt={product?.title}
            title={product?.title}
            price={product?.price}
            rating={product?.rating}
          />
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default UserView;
