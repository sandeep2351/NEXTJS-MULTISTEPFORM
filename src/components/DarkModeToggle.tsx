"use client";

import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkModePreference);
    document.documentElement.classList.toggle("dark", darkModePreference);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`relative flex items-center justify-center w-12 h-6 bg-gray-200 dark:bg-gray-700 
      rounded-full p-1 transition-colors duration-300 shadow-md hover:shadow-lg`}
      aria-label="Toggle Dark Mode"
    >
      <div
        className={`absolute w-4 h-4 bg-white dark:bg-yellow-300 rounded-full shadow-md 
        transform transition-transform duration-300 ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
      <span
        className={`absolute text-xs font-medium text-gray-700 dark:text-gray-300 
        transition-opacity duration-300 ${
          isDarkMode ? "opacity-100 right-1" : "opacity-100 left-1"
        }`}
      >
        {isDarkMode ? "🌙" : "☀️"}
      </span>
    </button>
  );
};

export default DarkModeToggle;
