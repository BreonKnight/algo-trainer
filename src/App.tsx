import { Routes, Route, Link } from "react-router-dom";
import { ProgressView } from "./components/progress/ProgressView";
import { TutorialView } from "./components/tutorials/TutorialView";
import { PythonTechniques } from "./components/algorithm-trainer/PythonTechniques";
import { AlgorithmVisualizer } from "./components/algorithm-trainer";
import { PatternKey } from "./components/algorithm-trainer/types";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ThemeProvider";
import { useTheme } from "./components/theme/theme-context";
import PatternManagement from "./components/admin/PatternManagement";
import { useState, useEffect } from "react";
import "./App.css";
import AlgorithmComparisonPage from "./app/algorithm-comparison/AlgorithmComparisonPage";
import HomePage from "./app/HomePage";
import {
  checkPatternFiles,
  logPatternCheckResults,
} from "./lib/utils/pattern-checker";

function AppContent() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDarkTheme =
    theme === "dracula" ||
    theme === "solarized" ||
    theme === "nord" ||
    theme === "snes" ||
    theme === "ps2" ||
    theme === "re2" ||
    theme === "mh" ||
    theme === "kingdom-hearts";

  const buttonClasses = isDarkTheme
    ? "absolute top-4 right-4 z-[100] p-2 rounded-full bg-background/40 backdrop-blur-sm border border-secondary/10 text-main hover:bg-background/60 transition-all"
    : "absolute top-4 right-4 z-[100] p-2 rounded-full bg-background/40 backdrop-blur-sm border border-accent/5 text-accent-foreground hover:bg-background/60 transition-all";

  const menuClasses = isDarkTheme
    ? "absolute top-16 right-4 z-[100] p-4 rounded-lg bg-background/40 backdrop-blur-sm border border-secondary/10 text-main flex flex-col space-y-2"
    : "absolute top-16 right-4 z-[100] p-4 rounded-lg bg-background/40 backdrop-blur-sm border border-accent/5 text-accent-foreground flex flex-col space-y-2";

  const linkClasses = isDarkTheme
    ? "text-sm hover:text-main/80"
    : "text-sm hover:text-accent-foreground/80";

  return (
    <div className="min-h-screen w-full bg-main">
      <button
        className={buttonClasses}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {isMenuOpen && (
        <div className={menuClasses}>
          <Link
            to="/"
            className={linkClasses}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          {import.meta.env.DEV && (
            <Link
              to="/admin/patterns"
              className={linkClasses}
              onClick={() => setIsMenuOpen(false)}
            >
              Pattern Management
            </Link>
          )}
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/progress" element={<ProgressView />} />
        <Route path="/tutorials" element={<TutorialView />} />
        <Route path="/python-techniques" element={<PythonTechniques />} />
        <Route
          path="/visualizer"
          element={
            <div className="container mx-auto p-4">
              <AlgorithmVisualizer
                algorithm="Bubble Sort"
                visualizationType="sorting"
              />
            </div>
          }
        />
        <Route
          path="/algorithm-comparison"
          element={<AlgorithmComparisonPage />}
        />
        {import.meta.env.DEV && (
          <Route path="/admin/patterns" element={<PatternManagement />} />
        )}
      </Routes>
      <Toaster position="top-center" richColors theme="dark" />
    </div>
  );
}

function App() {
  useEffect(() => {
    if (import.meta.env.DEV) {
      checkPatternFiles().then((results) => {
        logPatternCheckResults(results);
      });
    }
  }, []);

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
