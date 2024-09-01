import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useSelector } from "../../react-redux";
import wishlistIcon from "../assets/wishlist.png";

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
        <div className="mainDivIcon">
          <Link className="wishlist-icon" to="/wishlist">
            <div className="wishlist-items-count2">{value}</div>
            <img src={wishlistIcon} className="wishlistIcon" alt="love-icon" />
          </Link>
          <Link className="cart-icon" to="/cart">
            <div className="cart-items-count">{value}</div>
            <img src={CartIcon} alt="cart-icon" className="cartIcon" />
          </Link>
        </div>
      </div>
    </header>
  );
  
}
