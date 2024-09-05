import React from "react";
import { useSelector } from "react-redux";
import WishListItem from "../components/WishlistItem";

export default function Wishlist() {
  const cartItems = useSelector(({ products, cartItems }) => {
    console.log(products);
    console.log(cartItems);
    return cartItems.list
      .map(({ productId, quantity }) => {
        const cartProduct = products.list.find(
          (product) => product.id === productId
        );

        return { ...cartProduct, quantity };
      })
      .filter(({ title }) => title);
  });
  return (
    <div className="cart-container">
      <h2>Items in Your WishList</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
        </div>
        {cartItems.map((data) => (
          <WishListItem
            key={data.productData.productId}
            productId={data.productData.productId}
            title={data.productData.title}
            price={data.productData.price}
            imageUrl={data.productData.imageUrl}
            rating={data.productData.rating.rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
