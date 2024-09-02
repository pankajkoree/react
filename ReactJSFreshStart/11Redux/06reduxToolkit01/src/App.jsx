import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import Product from "./components/Product";
// import { productsList } from "../store/products";
// import { store } from "../store/index.js";
import { useSelector } from "react-redux";

function App() {
  const productsList = useSelector((state) => state.products);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
