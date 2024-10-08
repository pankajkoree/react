import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  let totalAmount = 0;
  const cartItems = useSelector(({ products, cartItems }) => {
    return cartItems.list
      .map(({ productId, quantity }) => {
        const cartProduct = products.list.find(
          (product) => product.id === productId
        );

        return { ...cartProduct, quantity };
      })
      .filter(({ title }) => title);
  });
  cartItems.map((element) => {
    totalAmount += element.quantity * element.price;
  });

  const isLoading = useSelector((state) => state.cartItems.loading);
  console.log(isLoading);
  const error = useSelector((state) => state.cartItems.error);
  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {isLoading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
        ) : error ? (
          <h2 style={{ textAlign: "center" }}>{error}</h2>
        ) : (
          cartItems.map((data) => (
            <CartItem
              key={data.id}
              productId={data.id}
              title={data.title}
              price={data.price}
              quantity={data.quantity}
              imageUrl={data.image}
              rating={data.rating.rate}
            />
          ))
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          {!isLoading || error && <div className="total">${totalAmount}</div>}
        </div>
      </div>
    </div>
  );
}
