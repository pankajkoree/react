import Button from "./Button";
import leftArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";
import { useState, Fragment } from "react";

// console.log(Fragment);

const AppleCounter = () => {
  const totalAppleCount = 10;
  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  );
  const onClickLeft = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount - 1);
      setLeftAppleCount(leftAppleCount + 1);
    }
  };
  const onClickRight = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount + 1);
      setLeftAppleCount(leftAppleCount - 1);
    }
  };

  return (
    <section>
      <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
      <Button imageURL={leftArrow} onClick={onClickLeft}>
        leftArrow
      </Button>
      <Button imageURL={rightArrow} onClick={onClickRight}
      children="rightArrow"
      />
      <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
    </section>
  );
};

export default AppleCounter;
