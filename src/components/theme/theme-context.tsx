import { createContext } from "react";
import { Theme } from "./theme-constants";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dracula",
  setTheme: (theme: Theme) => {
    console.log("Theme set to:", theme);
  },
  toggleTheme: () => {
    console.log("Theme toggled");
  },
});

export { ThemeContext };
