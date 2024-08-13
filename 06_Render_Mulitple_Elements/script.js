import { createRoot } from "react-dom/client";
import Card from "./card";

const root = createRoot(document.getElementById("root"));

const cards = () => {
  const cardElements = [];
  for (let i = 0; i <= 5; i++) {
    cardElements.push(<Card key={i} />);
  }
  return cardElements;
};

root.render(cards());
