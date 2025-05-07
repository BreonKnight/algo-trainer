import "./App.css";
import { useState, useEffect, Suspense, lazy, memo, useCallback, useMemo } from "react";
import { Routes, Route, useParams, Navigate, Link } from "react-router-dom";
import { Toaster } from "sonner";

import HomePage from "@/app/HomePage";
import PatternManagement from "@/components/admin/PatternManagement";
import { TopBar } from "@/components/algorithm-trainer/layout/TopBar";
import Practice from "@/components/practice/Practice";
import { useTheme } from "@/components/theme/use-theme";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AlgorithmTutorial } from "@/components/tutorials/AlgorithmTutorial";
import type { Tutorial } from "@/components/tutorials/AlgorithmTutorial";
import type { PatternKey } from "@/components/tutorials/types";
import { Navigation } from "@/components/ui/navigation";
import tutorialsData from "@/data/tutorials.json";
import { checkPatternFiles, logPatternCheckResults } from "@/lib/utils/pattern-checker";

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

// Log the imported data structure
// console.log("Imported tutorials data:", tutorialsData);
// console.log("Categories:", Object.keys(tutorialsData));

interface RawTutorial {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  difficulty: string;
  duration: number;
  prerequisites: string[];
  implementations: {
    python: string;
    javascript: string;
  };
  quiz: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

interface TutorialsByCategory {
  [category: string]: RawTutorial[];
}

const TutorialListItem = memo(({ tutorial }: { tutorial: RawTutorial; category: string }) => {
  return (
    <Link
      key={tutorial.id}
      to={`/tutorials/${tutorial.id}`}
      className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
    >
      <h3 className="font-medium">{tutorial.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{tutorial.description}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
          {tutorial.difficulty}
        </span>
        <span className="text-blue-600">View Tutorial</span>
      </div>
    </Link>
  );
});

function TutorialList() {
  const tutorials = tutorialsData as TutorialsByCategory;

  const sortedCategories = useMemo(() => {
    return Object.entries(tutorials).sort(([a], [b]) => a.localeCompare(b));
  }, [tutorials]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Available Tutorials</h1>
      {sortedCategories.map(([category, categoryTutorials]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold mb-4 capitalize">{category.replace("-", " ")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryTutorials.map((tutorial) => (
              <TutorialListItem key={tutorial.id} tutorial={tutorial} category={category} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TutorialRoute() {
  const { algorithm } = useParams();
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);

  // Log initial route parameters
  console.log("Route Parameters:", {
    algorithm,
    pathname: window.location.pathname,
    search: window.location.search,
  });

  const findMatchingTutorials = useCallback(() => {
    if (!algorithm) return [];

    const allTutorials: Tutorial[] = [];
    Object.entries(tutorialsData as TutorialsByCategory).forEach(([, categoryTutorials]) => {
      const matchingTutorials = categoryTutorials.filter((tutorial) => tutorial.id === algorithm);
      if (matchingTutorials.length > 0) {
        allTutorials.push(
          ...matchingTutorials.map((tutorial) => ({
            ...tutorial,
            difficulty: tutorial.difficulty as "beginner" | "intermediate" | "advanced",
          }))
        );
      }
    });
    return allTutorials;
  }, [algorithm]);

  useEffect(() => {
    const matchingTutorials = findMatchingTutorials();
    setTutorials(matchingTutorials);
  }, [findMatchingTutorials]);

  // If no algorithm is specified, redirect to tutorials list
  if (!algorithm) {
    return <Navigate to="/tutorials" replace />;
  }

  // If no tutorials found, show a "Not Found" message
  if (tutorials.length === 0) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Tutorial Not Found</h1>
        <p className="text-gray-600 mb-6">
          We couldn't find a tutorial for "{algorithm}". Please check the spelling or browse our
          available tutorials.
        </p>
        <a
          href="/tutorials"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Browse Tutorials
        </a>
      </div>
    );
  }

  // Log the props being passed to AlgorithmTutorial
  console.log("\nAlgorithmTutorial props:", {
    algorithm,
    tutorialsCount: tutorials.length,
    tutorialTitles: tutorials.map((t) => t.title),
  });

  return <AlgorithmTutorial algorithm={algorithm as PatternKey} tutorials={tutorials} />;
}

const AppContent = memo(function AppContent() {
  const { theme } = useTheme();
  console.log("AppContent rendered with theme:", theme);

  const routeElements = useMemo(
    () => (
      <Routes>
        <Route path="/" element={<HomePage />} />
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
  const checkPatterns = useCallback(async () => {
    if (import.meta.env.DEV) {
      const results = await checkPatternFiles();
      logPatternCheckResults(results);
    }
  }, []);

  useEffect(() => {
    checkPatterns();
  }, [checkPatterns]);

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
