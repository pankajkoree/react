"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { EcommerceCard } from "./EcommerceCard";

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

  products?.map((product) => console.log(product.title));

  return (
    <div>
    
      {products && products.length > 0 ? (
        <ul>
          {products?.map((product) => (
            <div>
             <EcommerceCard />
            </div>
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default UserView;
