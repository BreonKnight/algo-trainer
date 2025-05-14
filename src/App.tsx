import "./App.css";
import { Suspense, lazy, memo, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import AboutPage from "@/app/AboutPage";
import DesignSystemPage from "@/app/DesignSystemPage";
import PatternManagement from "@/components/admin/PatternManagement";
import { TopBar } from "@/components/algorithm-trainer/layout/TopBar";
import Practice from "@/components/practice/Practice";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/ui/navigation";

import ErrorBoundary from "./components/ErrorBoundary";
// Lazy load components
const AlgorithmTrainer = lazy(() => import("./components/algorithm-trainer/AlgorithmTrainer"));
const AlgoGuide = lazy(() => import("./components/algorithm-practice/AlgoGuide"));
const SystemsDesign = lazy(() => import("./components/SystemsDesign/SystemsDesign"));
const CSMath = lazy(() => import("./components/CSMath/CSMath"));
const PythonTechniques = lazy(() => import("./components/algorithm-trainer/PythonTechniques"));
const ProgressView = lazy(() => import("./components/progress/ProgressView"));
const AlgorithmComparison = lazy(
  () => import("./components/algorithm-trainer/AlgorithmComparison")
);
const TutorialRoute = lazy(() =>
  import("./components/algorithm-tutorials/AlgorithmTutorials").then((m) => ({
    default: m.TutorialRoute,
  }))
);
const TutorialList = lazy(() =>
  import("./components/algorithm-tutorials/AlgorithmTutorials").then((m) => ({
    default: m.TutorialList,
  }))
);

// Log the imported data structure
//console.log("Imported tutorials data:", tutorialsData);
//console.log("Categories:", Object.keys(tutorialsData));
const AppContent = memo(function AppContent() {
  const routeElements = useMemo(
    () => (
      <Routes>
        <Route path="/" element={<AlgorithmTrainer />} />
        <Route
          path="/progress"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen">
                  Loading progress view...
                </div>
              }
            >
              <ProgressView />
            </Suspense>
          }
        />
        <Route path="/tutorials" element={<TutorialList />} />
        <Route path="/tutorials/:algorithm" element={<TutorialRoute />} />
        <Route
          path="/python-techniques"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen">
                  Loading Python techniques...
                </div>
              }
            >
              <PythonTechniques />
            </Suspense>
          }
        />
        <Route
          path="/practice"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen">
                  Loading practice environment...
                </div>
              }
            >
              <Practice />
            </Suspense>
          }
        />
        <Route
          path="/systems-design"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen">
                  Loading systems design...
                </div>
              }
            >
              <SystemsDesign />
            </Suspense>
          }
        />
        <Route
          path="/algorithm-trainer"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen">
                  Loading algorithm trainer...
                </div>
              }
            >
              <AlgorithmTrainer />
            </Suspense>
          }
        />
        <Route
          path="/algo-guide"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen">
                  Loading algorithm guide...
                </div>
              }
            >
              <AlgoGuide />
            </Suspense>
          }
        />
        <Route
          path="/algorithm-comparison"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen">
                  Loading algorithm comparison...
                </div>
              }
            >
              <AlgorithmComparison />
            </Suspense>
          }
        />
        <Route
          path="/cs-math"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen">Loading CS Math...</div>
              }
            >
              <CSMath />
            </Suspense>
          }
        />
        {import.meta.env.DEV && <Route path="/admin/patterns" element={<PatternManagement />} />}
        <Route
          path="/about"
          element={
            <Suspense
              fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}
            >
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/design-system"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen">
                  Loading design system...
                </div>
              }
            >
              <DesignSystemPage />
            </Suspense>
          }
        />
      </Routes>
    ),
    []
  );

  return (
    <div className="min-h-screen w-full bg-main">
      <Navigation />
      <div className="pt-16">
        <TopBar />
        <main className="pt-4">{routeElements}</main>
      </div>
      <Toaster position="bottom-left" richColors theme="dark" />
    </div>
  );
});

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-background">
          <div className="container mx-auto">
            <AppContent />
            <div className="mt-4 text-center text-sm text-secondary flex-none">
              Created by{" "}
              <a
                href="https://breon.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent3 hover:text-accent transition-colors"
              >
                Breon
              </a>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
