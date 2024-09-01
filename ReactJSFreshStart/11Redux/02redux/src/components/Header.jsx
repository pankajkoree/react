import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useSelector } from "react-redux";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems || []);
  let itemCount = [];
  cartItems.map((data) => {
    itemCount.push(data.quantity);
  });
  let value = itemCount.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">{value}</div>
        </Link>
      </div>
    </header>
  );
}
