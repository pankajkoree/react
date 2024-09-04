import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  let totalAmount = 0;
  const cartItems = useSelector(({ products, cartItems }) => {
    return cartItems.map(({ productId, quantity }) => {
      const cartProduct = products.list.find(
        (product) => product.id === productId
      );

      return { ...cartProduct, quantity };
    });
  });
  cartItems.map((element) => {
    totalAmount += element.quantity * element.price;
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
            key={data.id}
            productId={data.id}
            title={data.title}
            price={data.price}
            quantity={data.quantity}
            imageUrl={data.image}
            rating={data.rating.rate}
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
