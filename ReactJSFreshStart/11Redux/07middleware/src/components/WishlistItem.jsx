import React from "react";
import { useDispatch } from "react-redux";

export default function WishListItem({ title, rating, price, imageUrl }) {
  const dispatch = useDispatch();
  console.log(dispatch);
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">${price}</div>
    </div>
  );
}
