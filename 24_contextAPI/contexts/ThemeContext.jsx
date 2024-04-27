import { createContext } from "react";
import { useState } from "react";

export const themeContext = createContext();

export function ThemeProvider({ children }) {
  console.log(children);
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <>
      <themeContext.Provider value={[isDark, setIsDark]}>
        {children}
      </themeContext.Provider>

      {/* <themeContext.Provider></themeContext.Provider> */}
    </>
  );
}
