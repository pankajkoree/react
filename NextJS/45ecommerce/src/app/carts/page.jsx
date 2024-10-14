"use client";

const Cart = () => {
  const cartItem = localStorage.getItem("cart");
  
  console.log(cartItem);
  return <h1>Cart Page</h1>;
};

export default Cart;
