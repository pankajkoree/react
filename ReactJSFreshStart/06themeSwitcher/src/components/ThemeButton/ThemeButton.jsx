import React from "react";
import lightImage from "../../assets/images/light.jpg";
import darkImage from "../../assets/images/dark.jpg";
import useTheme from "../context/theme";

function ThemeButton() {
  let { themeMode, lightTheme, darkTheme } = useTheme();
  const onClickButton = (e) => {
    const themeStatus = e.currentTarget.checked;
    const imageIcon = document.querySelector("#imageIcon");
    if (themeStatus) {
      darkTheme();
      imageIcon.src = lightImage;
    } else {
      lightTheme();
      imageIcon.src = darkImage;
    }
  };
  return (
    <div>
      <input
        type="checkbox"
        value=""
        onChange={onClickButton}
        className="relative w-[30px] h-[30px] top-[125px] left-[1200px] border-2 border-blue-500 rounded-full cursor-pointer"
        checked={themeMode === "dark"}
      />
      <img
        src={darkImage}
        alt="image"
        className={`relative w-[40px] h-[40px] top-20 left-[1250px] border-2 border-blue-500 rounded-full cursor-pointer`}
        id="imageIcon"
      />
    </div>
  );
}

export default ThemeButton;
