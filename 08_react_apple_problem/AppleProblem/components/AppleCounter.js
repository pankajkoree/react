import Button from "./Button";
import leftArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";
import AppleBasket from "./AppleBasket";
import "./AppleCounter.css";

const AppleCounter = () => {
  return (
    <section>
      <AppleBasket appleCount={10} basketName="Basket 1" />
      <Button imageURL={leftArrow} imageText="left-Arrow" />
      <Button imageURL={rightArrow} imageText="right-Arrow" />
      <AppleBasket appleCount={0} basketName="Basket 2" />
    </section>
  );
};

export default AppleCounter;
