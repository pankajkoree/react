import Button from "./Button";
import leftArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";

import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector("#root"));

const totalAppleCount = 10;
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalAppleCount - secondBasketAppleCount;
const AppleCounter = () => {
  const onClickLeft = () => {
    if (secondBasketAppleCount > 0) {
      firstBasketAppleCount++;
      secondBasketAppleCount--;
      root.render(<AppleCounter />);
    }

    console.log(firstBasketAppleCount, secondBasketAppleCount);
  };
  const onClickRight = () => {
    if (firstBasketAppleCount > 0) {
      firstBasketAppleCount--;
      secondBasketAppleCount++;
      root.render(<AppleCounter />);
    }

    console.log(firstBasketAppleCount, secondBasketAppleCount);
  };
  return (
    <>
      <section>
        <AppleBasket appleCount={firstBasketAppleCount} basketName="Basket 1" />
        <Button
          imageURL={leftArrow}
          onClick={onClickLeft}
          imageText="left-Arrow"
        />
        <Button
          imageURL={rightArrow}
          onClick={onClickRight}
          imageText="right-Arrow"
        />
        <AppleBasket
          appleCount={secondBasketAppleCount}
          basketName="Basket 2"
        />
      </section>
      <p
        style={{
          textAlign: "center",
          marginTop: "32px",
        }}
      >
        <button onClick={() => {}}>Re-render</button>
      </p>
    </>
  );
};

export default AppleCounter;
