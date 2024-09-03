import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems || []);
  let totalAmount = 0;
  cartItems.forEach((data) => {
    totalAmount += data.quantity * data.price;
  });
  let fixedTotal = parseFloat(totalAmount.toFixed(2));

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
            key={data.productId}
            productId={data.productId}
            title={data.title}
            price={data.price}
            quantity={data.quantity}
            imageUrl={data.imageUrl}
            rating={data.rating.rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">${fixedTotal}</div>
        </div>
      </div>
    </div>
  );
}
