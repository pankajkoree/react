import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import {
  getAllProducts,
  getProductError,
} from "../../store/slices/productSlice";
export default function Home() {
  const getProducts = useSelector(getAllProducts);
  let productsList;
  if (getProducts === undefined) {
    productsList = [];
  } else {
    productsList = [];
    productsList.push(getProducts);
  }

  const error = useSelector(getProductError);

  return productsList.length > 0 ? (
    <div className="products-container">
      {productsList[0].map(({ id, title, rating, price, images }) => (
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
  ) : error ? (
    <h2 style={{ textAlign: "center" }}>{error}</h2>
  ) : (
    <h1 style={{ textAlign: "center" }}>Loading...</h1>
  );
}
