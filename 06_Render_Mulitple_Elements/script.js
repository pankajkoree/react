import { createRoot } from "react-dom/client";
import "./style.css"
import Card from "./card";

const root = createRoot(document.getElementById("root"));

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    // Create an array of Card components
    const cards = data.map((product) =>
      Card(
        product.id,
        product.image,
        product.category,
        product.title,
        product.price
      )
    );

    // Render all cards at once
    root.render(<div className="all">{cards}</div>);
  });
