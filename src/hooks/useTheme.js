import { useState, useEffect } from "react";
import { safeReadStorage, safeWriteStorage } from "../utils/storage";

const THEME_KEY = "theme";

export function useTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return safeReadStorage(THEME_KEY) === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      safeWriteStorage(THEME_KEY, "dark");
    } else {
      document.body.classList.remove("dark-mode");
      safeWriteStorage(THEME_KEY, "light");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return { darkMode, toggleTheme };
}
