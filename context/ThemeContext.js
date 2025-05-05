"use client";
import { createContext, useContext, useState, useEffect } from "react";
import Loading from "@/components/Loading"; // Ensure this is a default import

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("Page_theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    } else if (savedTheme === "light") {
      setDarkMode(false);
    }
    setIsLoading(false); // Stop loading after fetching theme
  }, []);

  useEffect(() => {
    const themeClass = darkMode ? "theme-dark" : "theme-light";
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(themeClass);
  }, [darkMode]);

  if (isLoading) {
    return <Loading />; // Show loading screen while fetching theme
  }

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
