import React, { useEffect, useState } from "react";

import { Theme, THEMES, THEME_COLORS } from "./theme-constants";
import { ThemeContext } from "./theme-context-definition";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme;
      return savedTheme || "dracula";
    }
    return "dracula";
  });

  useEffect(() => {
    const root = document.documentElement;
    const colors = THEME_COLORS[theme as keyof typeof THEME_COLORS];

    // Apply theme colors as CSS variables
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value as string);
    });

    // Add transition class for smooth theme changes
    root.classList.add("theme-transition");
    localStorage.setItem("theme", theme);

    // Remove transition class after animation completes
    const timeout = setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 300);

    return () => clearTimeout(timeout);
  }, [theme]);

  const toggleTheme = () => {
    const currentIndex = THEMES.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setTheme(THEMES[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
