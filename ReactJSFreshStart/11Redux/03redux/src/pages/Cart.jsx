import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "../../react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems || []);
  let totalAmount = 0;
  cartItems.map((data) => {
    totalAmount += data.productData.price;
    return totalAmount;
  });

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
        {cartItems.map((data) => (
          <CartItem
            key={data.productData.productId}
            productId={data.productData.productId}
            title={data.productData.title}
            price={data.productData.price}
            quantity={data.quantity}
            imageUrl={data.productData.imageUrl}
            rating={data.productData.rating.rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${totalAmount}</div>
        </div>
      </div>
    </div>
  );
}
