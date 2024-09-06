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
import {
  fetchCartItems,
  fetchCartItemsError,
  loadCartItems,
} from "../../store/slices/cartSlice";
import { fetchData } from "../../store/middleware/apiMiddleware";

export default function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchData({
        url: "products",
        onStart: fetchProducts.type,
        onSuccess: updateAllProducts.type,
        onError: fetchProductsError.type,
      })
    );
    dispatch(
      fetchData({
        url: "products/2",
        onStart: fetchCartItems.type,
        onSuccess: loadCartItems.type,
        onError: fetchCartItemsError.type,
      })
    );
  }, []);

  const cartItems = useSelector((state) => state.cartItems.list);
  // const itemCount = cartItems.products.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div className="mainDivIcon">
          <Link className="wishlist-icon" to="/wishlist">
            <div className="wishlist-items-count2">{0}</div>
            <img src={wishlistIcon} className="wishlistIcon" alt="love-icon" />
          </Link>
          <Link className="cart-icon" to="/cart">
            <div className="cart-items-count">{0}</div>
            <img src={CartIcon} alt="cart-icon" className="cartIcon" />
          </Link>
        </div>
      </div>
    </header>
  );
}
