import React from "react";
import lightImage from "../../assets/images/light.jpg";
import useTheme from "../context/theme";

function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const onClickButton = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      console.log("dark mode applied");
      darkTheme();
    } else {
      console.log("light mode applied");
      lightTheme();
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
        src={lightImage}
        alt="image"
        className="relative w-[40px] h-[40px] top-20 left-[1250px] border-2 border-blue-500 rounded-full cursor-pointer"
      />
    </div>
  );
}

export default ThemeButton;
