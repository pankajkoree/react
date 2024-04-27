import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  console.log(children);
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <>
      <ThemeContext.Provider value={[isDark, setIsDark]}>
        {children}
      </ThemeContext.Provider>

      {/* <themeContext.Provider></themeContext.Provider> */}
    </>
  );
}
