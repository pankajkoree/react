"use client";

import EcommerceCard from "./EcommerceCard";
import "./style.scss";
import { useQuery } from "@tanstack/react-query";

// const getProductsData = async () => {
//   try {
//     let response = await fetch(
//       "http://localhost:3000/api/products/getProducts"
//     );
//     response = await response.json();
//     if (response.success) {
//       return response.results;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// };

// useEffect(() => {
//   const fetchData = async () => {
//     const data = await getProductsData();
//     setProducts(data);
//   };

//   fetchData();
// }, []);

const getProductsData = async () => {
  const response = await fetch(
    "http://localhost:3000/api/products/getProducts"
  );
  return await response.json();
};

const UserView = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProductsData,
  });
  data?.results.map((product) => console.log(product));

  const cells = 4;
  const cellsArray = [];
  for (let i = 0; i < cells; i++) {
    for (let j = 0; j < cells; j++) {
      cellsArray.push(`d-${i + j}`);
    }
  }

  if (isPending)
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
    <div className="relative grid md:grid-cols-3 gap-8 top-8 px-8 max-w-full">
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
