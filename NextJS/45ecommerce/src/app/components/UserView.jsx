"use client";

import { useState } from "react";
import EcommerceCard from "./EcommerceCard";
import "./style.scss";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const getProductsData = async (page = 0) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/products/getProductsByPage?page=${page}&limit=21`
    );

    if (!response.ok) {
      toast.error("failed to fetch...");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    toast.error(error);
    return false;
  }
};

const UserView = () => {
  const [page, setPage] = useState(0);
  const { isLoading, error, data, isFetching, isPreviousData } = useQuery({
    queryKey: ["getProducts", page],
    queryFn: () => getProductsData(page),
    keepPreviousData: true,
  });

  const cells = 4;
  const cellsArray = [];
  for (let i = 0; i < cells; i++) {
    for (let j = 0; j < cells; j++) {
      cellsArray.push(`d-${i + j}`);
    }
  }

  if (isLoading && !isPreviousData) {
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
  }

  if (error) return "Error occurred: " + error.message;

  return (
    <div>
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

      <div className="flex justify-center gap-4 mt-4">
        <Button
          variant="primary"
          className="relative"
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0 || isLoading}
        >
          Previous Page
        </Button>

        <Button
          variant="primary"
          className="relative"
          onClick={() => {
            if (!isPreviousData && data?.results?.length === 21) {
              setPage((prev) => prev + 1);
            }
          }}
          disabled={isLoading || isPreviousData || data?.results?.length < 21}
        >
          Next Page
        </Button>
      </div>

      {isFetching && !isLoading ? <span>Loading more data...</span> : null}
    </div>
  );
};

export default UserView;
