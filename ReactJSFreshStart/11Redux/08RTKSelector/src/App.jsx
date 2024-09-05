import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
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
