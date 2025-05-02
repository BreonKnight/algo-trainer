import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AlgorithmTrainer from "./components/algorithm-trainer/AlgorithmTrainer";
import { ProgressView } from "./components/ProgressView";
import { TutorialView } from "./components/tutorials/TutorialView";
import { PythonTechniques } from "./components/algorithm-trainer/PythonTechniques";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ThemeProvider";
import { useTheme } from "./components/theme-context";
import PatternManagement from "./components/admin/PatternManagement";
import "./App.css";

function AppContent() {
  const { theme } = useTheme();

  const isDarkTheme =
    theme === "dracula" ||
    theme === "solarized" ||
    theme === "nord" ||
    theme === "snes" ||
    theme === "ps2" ||
    theme === "re2" ||
    theme === "mh" ||
    theme === "kingdom-hearts";

  const navClasses = isDarkTheme
    ? "sticky top-0 z-50 w-full border-b backdrop-blur-sm bg-background/80 border-secondary/20 text-main"
    : "sticky top-0 z-50 w-full border-b backdrop-blur-sm bg-background/80 border-accent/10 text-accent-foreground";

  const linkClasses = isDarkTheme
    ? "text-lg font-semibold hover:text-main/80"
    : "text-lg font-semibold hover:text-accent-foreground/80";

  return (
    <div className="min-h-screen w-full bg-main">
      <nav className={navClasses}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <Link to="/" className={linkClasses}>
                Home
              </Link>
              {import.meta.env.DEV && (
                <Link to="/admin/patterns" className={linkClasses}>
                  Pattern Management
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<AlgorithmTrainer />} />
        <Route path="/progress" element={<ProgressView />} />
        <Route path="/tutorials" element={<TutorialView />} />
        <Route path="/python-techniques" element={<PythonTechniques />} />
        {import.meta.env.DEV && (
          <Route path="/admin/patterns" element={<PatternManagement />} />
        )}
      </Routes>
      <Toaster position="top-center" richColors theme="dark" />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
