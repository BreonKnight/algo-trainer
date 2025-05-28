import "./App.css";
import { Suspense, lazy, memo, useMemo } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import React from "react";

import AboutPage from "@/app/AboutPage";
import AuthPage from "@/app/AuthPage";
import DesignSystemPage from "@/app/DesignSystemPage";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { TopBar } from "@/components/features/algorithm-trainer/components/layout/TopBar";
import PatternManagement from "@/components/layouts/admin/PatternManagement";
import { Navigation } from "@/components/ui/navigation";
import { AnalyticsDashboard } from "./components/AnalyticsDashboard";

import Practice from "@algo-trainer/shared/stores/practice-store";

// Lazy load components
const AlgorithmTrainer = lazy(
  () => import("@/components/features/algorithm-trainer/components/core/AlgorithmTrainer")
);
const AlgoGuide = lazy(() => import("@/components/features/algorithm-practice/AlgoGuide"));
const SystemsDesign = lazy(() => import("@/components/features/systemsDesign/SystemsDesign"));
const CSMath = lazy(() => import("@/components/features/CSMath/CSMath"));
const PythonTechniques = lazy(
  () => import("@/components/features/algorithm-trainer/components/core/PythonTechniques")
);
const ProgressView = lazy(() => import("@/components/features/progress/ProgressView"));
const AlgorithmComparison = lazy(
  () => import("@/components/features/algorithm-trainer/components/core/AlgorithmComparison")
);
const TutorialRoute = lazy(() =>
  import("@/components/features/algorithm-tutorials/AlgorithmTutorials").then((m) => ({
    default: m.TutorialRoute,
  }))
);
const TutorialList = lazy(() =>
  import("@/components/features/algorithm-tutorials/AlgorithmTutorials").then((m) => ({
    default: m.TutorialList,
  }))
);

// Log the imported data structure
//console.log("Imported tutorials data:", tutorialsData);
//console.log("Categories:", Object.keys(tutorialsData));
const AppContent = memo(function AppContent() {
  const location = useLocation();
  const isAuthRoute = location.pathname === "/auth";

  const routeElements = useMemo(
    () => (
      <Routes>
        <Route path="/" element={<AlgorithmTrainer />} />
        <Route path="/auth" element={<AuthPage />} />
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
        {!isAuthRoute && <TopBar />}
        <main className={!isAuthRoute ? "pt-4" : ""}>{routeElements}</main>
      </div>
      <Toaster position="bottom-left" richColors theme="dark" />
      <AnalyticsDashboard />
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
