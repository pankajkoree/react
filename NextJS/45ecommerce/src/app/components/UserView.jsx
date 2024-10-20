"use client";
import { useState, useEffect } from "react";
import EcommerceCard from "./EcommerceCard";
import "./style.scss";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

// Modified function to handle search input
const getProductsData = async (page = 0, searchInput = "") => {
  try {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      limit: "21",
      search: searchInput, // Add the search parameter
    });

    const response = await fetch(
      `http://localhost:3000/api/products/getProducts?${queryParams.toString()}`
    );

    if (!response.ok) {
      toast.error("Failed to fetch...");
      return false;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    toast.error(error.message || "Error fetching products");
    return false;
  }
};

const UserView = () => {
  const [page, setPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const { isLoading, error, data, isFetching, isPreviousData } = useQuery({
    queryKey: ["getProducts", page, searchInput], // Include search input in queryKey
    queryFn: () => getProductsData(page, searchInput),
    keepPreviousData: true,
  });

  // When searchInput changes, reset the page to 0
  useEffect(() => {
    setPage(0);
  }, [searchInput]);

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
      {/* Search Input */}
      <div className="flex justify-center mb-4">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search for products..."
          className="relative flex h-[44px] text-base sm:text-[16px] md:text-xl border-2 border-gray-700 transition-all duration-300 dark:border-2 dark:hover:border-blue-500 dark:animate-border-animation"
        />
      </div>

      {/* Product Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:max-w-[80%] xl:left-[10%] xl:top-8 gap-8 px-4 md:px-8 max-w-full mb-12 top-4">
        {data?.results?.length ? (
          data.results.map((product) => (
            <EcommerceCard
              key={product?._id}
              id={product._id}
              src={product?.thumbnail}
              alt={product?.title}
              title={product?.title}
              price={product?.price}
              rating={product?.rating}
            />
          ))
        ) : (
          <div className="text-center text-xl">No products found.</div>
        )}
      </div>

      {/* Pagination */}
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
