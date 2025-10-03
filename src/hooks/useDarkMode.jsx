import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [darkmode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("theme-dark"); 
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("theme-dark");
      localStorage.removeItem("theme");
    }
  }, [darkmode]);

  return [darkmode, setDarkMode];
}
