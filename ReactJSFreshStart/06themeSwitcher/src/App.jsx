import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import { ThemeProvider } from "./components/context/theme";
import ThemeButton from "./components/ThemeButton/ThemeButton";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  });
  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <ThemeButton />
        <Card />
      </ThemeProvider>
    </>
  );
}

export default App;
