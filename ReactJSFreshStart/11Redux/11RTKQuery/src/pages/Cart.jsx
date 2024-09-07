import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import {
  getAllCartItems,
  getCartError,
  getCartLoadingState,
} from "../../store/slices/cartSlice";

export default function Cart() {
  let totalAmount = 0;
  const cartItems = useSelector(getAllCartItems);
  cartItems.map((element) => {
    totalAmount += element.quantity * element.price;
  });

  const isLoading = useSelector(getCartLoadingState);
  console.log(isLoading);
  const error = useSelector(getCartError);
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
          {!isLoading || (error && <div className="total">${totalAmount}</div>)}
        </div>
      </div>
    </div>
  );
}
