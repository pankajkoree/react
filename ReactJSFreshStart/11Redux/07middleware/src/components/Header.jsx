import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import wishlistIcon from "../assets/wishlist.png";
import {
  fetchProducts,
  fetchProductsError,
  updateAllProducts,
} from "../../store/slices/productSlice";
import { loadCartItems } from "../../store/slices/cartSlice";

export default function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(updateAllProducts(data));
      })
      .catch(() => {
        dispatch(fetchProductsError());
      });
    fetch("https://fakestoreapi.com/carts/5")
      .then((res) => res.json())
      .then((data) => {
        dispatch(loadCartItems(data));
      })
  }, []);
  const cartItems = useSelector((state) => state.cartItems.list || []);
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
