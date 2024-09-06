import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../assets/cart-icon.svg";
import wishlistIcon from "../assets/wishlist.png";
import {
  fetchProducts,
  fetchProductsError,
  updateAllProducts,
} from "../../store/slices/productSlice";
import { fetchCartItems } from "../../store/slices/cartSlice";

export default function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "api/makeCall",
      payload: {
        url: "products",
        onStart: fetchProducts.type,
        onSuccess: updateAllProducts.type,
        onError: fetchProductsError.type,
      },
    });
  }, [dispatch]);

  const cartItems = useSelector((state) => state.cartItems.list || []);
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div className="mainDivIcon">
          <Link className="wishlist-icon" to="/wishlist">
            <div className="wishlist-items-count2">{itemCount}</div>
            <img src={wishlistIcon} className="wishlistIcon" alt="love-icon" />
          </Link>
          <Link className="cart-icon" to="/cart">
            <div className="cart-items-count">{itemCount}</div>
            <img src={CartIcon} alt="cart-icon" className="cartIcon" />
          </Link>
        </div>
      </div>
    </header>
  );
}
