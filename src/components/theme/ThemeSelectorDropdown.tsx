import React from "react";

import { THEMES } from "./theme-constants";
import { useTheme } from "./use-theme";

const ThemeSelectorDropdown: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themeIcons = {
    dracula: "🧛",
    nord: "❄️",
    snes: "🎮",
    fortnite: "🏆",
    light: "☀️",
    solarized: "🌞",
    ps2: "🎮",
    re2: "🧟",
    mh: "🐉",
    "kingdom-hearts": "👑",
  };

  const handleThemeChange = (newTheme: typeof theme) => {
    setTheme(newTheme);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <select
        value={theme}
        onChange={(e) => handleThemeChange(e.target.value as typeof theme)}
        className="w-full px-4 py-2 text-sm font-medium rounded-lg shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-accent/50 
          bg-background/80 backdrop-blur-sm
          text-foreground border border-border/50
          hover:border-accent/50 hover:bg-background/90
          transition-all duration-200
          appearance-none cursor-pointer"
      >
        {THEMES.map((themeOption) => (
          <option
            key={themeOption}
            value={themeOption}
            className="py-2 px-4 bg-background text-foreground"
          >
            {themeIcons[themeOption]}{" "}
            {themeOption
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-5 h-5 text-foreground/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default ThemeSelectorDropdown;
