import { useEffect, useState } from "react";

// creating a customhook but its not a best practice coz name should start from use so
export function useWindowsSize() {
  const [windowSize, setWindowsSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowsSize({ width: window.innerWidth, height: window.innerHeight });
    });
  }, []);

  return windowSize;
}
