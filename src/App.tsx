import { Routes, Route } from "react-router-dom";
import { ProgressView } from "./components/progress/ProgressView";
import { TutorialView } from "./components/tutorials/TutorialView";
import { PythonTechniques } from "./components/algorithm-trainer/PythonTechniques";
import { AlgorithmVisualizer } from "./components/algorithm-trainer";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/ThemeProvider";
import { useTheme } from "./components/theme/theme-context";
import PatternManagement from "./components/admin/PatternManagement";
import { useEffect } from "react";
import "./App.css";
import AlgorithmComparisonPage from "./app/algorithm-comparison/AlgorithmComparisonPage";
import HomePage from "./app/HomePage";
import AlgorithmLearning from "./components/AlgorithmLearning/AlgorithmLearning";
import {
  checkPatternFiles,
  logPatternCheckResults,
} from "./lib/utils/pattern-checker";
import { Navigation } from "./components/ui/navigation";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen w-full bg-main">
      <Navigation />

      <main className="pt-16">
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
          <Route path="/algorithm-learning" element={<AlgorithmLearning />} />
          {import.meta.env.DEV && (
            <Route path="/admin/patterns" element={<PatternManagement />} />
          )}
        </Routes>
      </main>

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
