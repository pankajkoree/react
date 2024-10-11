"use client";

import EcommerceCard from "./EcommerceCard";
import "./style.scss";
import { useQuery } from "@tanstack/react-query";

const getProductsData = async () => {
  const response = await fetch(
    "http://localhost:3000/api/products/getProducts"
  );
  return await response.json();
};

const UserView = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProductsData,
  });

  const cells = 4;
  const cellsArray = [];
  for (let i = 0; i < cells; i++) {
    for (let j = 0; j < cells; j++) {
      cellsArray.push(`d-${i + j}`);
    }
  }

  if (isLoading)
    return (
      <div className="relative flex flex-col items-center text-center text-3xl top-[273px]">
        <div className="min-h-[300px]">
          <div className="mosaic-loader">
            {cellsArray.map((cellClass, index) => (
              <div key={index} className={`cell ${cellClass}`} />
            ))}
          </div>
          <div>
            <h1>Loading...</h1>
          </div>
        </div>
      </div>
    );

  if (error) return "error occured.. " + error.message;

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:max-w-[80%] xl:left-[10%] xl:top-8 gap-8 px-4 md:px-8 max-w-full mb-12 top-4">
      {data?.results.map((product) => (
        <EcommerceCard
          key={product?.id}
          id={product._id}
          src={product?.thumbnail}
          alt={product?.title}
          title={product?.title}
          price={product?.price}
          rating={product?.rating}
        />
      ))}
    </div>
  );
};

export default UserView;
