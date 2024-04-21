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
    // this <Fragment>, <> is known as fragments which is used to wrap and return to or main components, we can also do this by adding a div as parent container but it adds a extra div in html
    <Fragment>
  <section>
    <AppleBasket appleCount={leftAppleCount} basketName="Basket 1" />
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
    <AppleBasket appleCount={rightAppleCount} basketName="Basket 2" />
  </section>
  <p
    style={{
      textAlign: "center",
      marginTop: "32px",
    }}
  ></p>

</Fragment>
  );
};

export default AppleCounter;
