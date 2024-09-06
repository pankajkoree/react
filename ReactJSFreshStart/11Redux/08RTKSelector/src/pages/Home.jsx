import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import {
  getAllProducts,
  getProductError,
  getProductLoadingState,
} from "../../store/slices/productSlice";
// import {productsList} from "../../store/productsList"
export default function Home() {
  const getProducts = useSelector(getAllProducts);
  let productsList;
  if (getProducts === undefined) {
    productsList = [];
  } else {
    productsList = [];
    productsList.push(getProducts);
  }
  console.log(productsList);

  const isLoading = useSelector(getProductLoadingState);
  const error = useSelector(getProductError);

  // return isLoading ? (
  //   <h1 style={{ textAlign: "center" }}>Loading...</h1>
  // ) : error ? (
  //   <h2 style={{ textAlign: "center" }}>{error}</h2>
  // ) : (
  //   <div className="products-container">
  //     {productsList[0].map(({ id, title, rating, price, image }) => (
  //       <Product
  //         key={id}
  //         productId={id}
  //         title={title}
  //         rating={rating}
  //         price={price}
  //         imageUrl={image}
  //       />
  //     ))}
  //   </div>
  // );

  return productsList.length > 0 ? (
    
    <div className="products-container">
      {productsList[0].map(({ id, title, rating, price,images }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating}
          price={price}
          imageUrl={images[0]}
        />
      ))}
    </div>
  ) : (
    <h1 style={{ textAlign: "center" }}>Loading...</h1>
  );
}
