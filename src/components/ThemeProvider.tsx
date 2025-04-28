import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const THEMES = ["dracula", "solarized", "light"] as const;
type Theme = (typeof THEMES)[number];

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dracula");

  useEffect(() => {
    const stored = localStorage.getItem("algo-theme");
    if (stored && THEMES.includes(stored as Theme)) {
      setThemeState(stored as Theme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(
      ...THEMES.map((t) => `theme-${t}`)
    );
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem("algo-theme", theme);
  }, [theme]);

  const setTheme = (t: Theme) => setThemeState(t);
  const toggleTheme = () => {
    setThemeState((prev) => {
      const idx = THEMES.indexOf(prev);
      return THEMES[(idx + 1) % THEMES.length];
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
