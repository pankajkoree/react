"use client";

import { useEffect, useState } from "react";

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

const SpecificProductPage = ({ params }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProductsData();
      setProducts(data);
    };

    fetchData();
  }, []);

  console.log(params.product[0]);

  products.map()
  return (
    <div>
      <h1>Specific Product Page</h1>
    </div>
  );
};

export default SpecificProductPage;
