import { Routes, Route, useParams, Navigate, Link } from "react-router-dom";
import { ProgressView } from "./components/progress/ProgressView";
import { AlgorithmTutorial } from "./components/tutorials/AlgorithmTutorial";
import { PythonTechniques } from "./components/algorithm-trainer/PythonTechniques";
import { AlgorithmVisualizer } from "./components/algorithm-trainer/AlgorithmVisualizer";
import { AlgorithmComparison } from "./components/algorithm-trainer/AlgorithmComparison";
import AlgorithmLearning from "./components/AlgorithmLearning/AlgorithmLearning";
import PatternManagement from "./components/admin/PatternManagement";
import { Navigation } from "./components/ui/navigation";
import { TopBar } from "./components/algorithm-trainer/layout/TopBar";
import HomePage from "./app/HomePage";
import { useTheme } from "./components/theme/theme-context";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "sonner";
import { cn } from "./lib/utils";
import { useState, useEffect } from "react";
import "./App.css";
import {
  checkPatternFiles,
  logPatternCheckResults,
} from "./lib/utils/pattern-checker";
import type { Tutorial } from "./components/tutorials/AlgorithmTutorial";
import type { PatternKey } from "./components/tutorials/types";
import tutorialsData from "./data/tutorials.json";

// Log the imported data structure
console.log("Imported tutorials data:", tutorialsData);
console.log("Categories:", Object.keys(tutorialsData));

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

function TutorialRoute() {
  const { algorithm } = useParams();
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);

  // Log initial route parameters
  console.log("Route Parameters:", {
    algorithm,
    pathname: window.location.pathname,
    search: window.location.search,
  });

  useEffect(() => {
    // If no algorithm is specified, return early
    if (!algorithm) return;

    console.log("TutorialRoute useEffect triggered with algorithm:", algorithm);
    console.log("Raw tutorials data structure:", {
      categories: Object.keys(tutorialsData),
      totalTutorials: Object.values(
        tutorialsData as TutorialsByCategory
      ).reduce((sum, tutorials) => sum + tutorials.length, 0),
    });

    // Find the tutorial that matches the algorithm name across all categories
    const allTutorials: Tutorial[] = [];

    // Iterate through each category
    Object.entries(tutorialsData as TutorialsByCategory).forEach(
      ([category, categoryTutorials]) => {
        console.log(`\nChecking category: ${category}`);
        console.log(`Category has ${categoryTutorials.length} tutorials`);

        // Find tutorials in this category that match the algorithm name
        const matchingTutorials = categoryTutorials.filter((tutorial) => {
          const isMatch =
            tutorial.title.toLowerCase() === algorithm.toLowerCase();
          console.log(
            `Comparing "${tutorial.title}" with "${algorithm}": ${isMatch}`
          );
          return isMatch;
        });

        if (matchingTutorials.length > 0) {
          console.log(
            `Found ${matchingTutorials.length} matching tutorials in category ${category}:`,
            matchingTutorials.map((t) => t.title)
          );
          allTutorials.push(
            ...matchingTutorials.map((tutorial) => ({
              ...tutorial,
              difficulty: tutorial.difficulty as
                | "beginner"
                | "intermediate"
                | "advanced",
            }))
          );
        }
      }
    );

    console.log("\nFinal tutorial matching results:", {
      algorithm,
      totalMatches: allTutorials.length,
      matchedTutorials: allTutorials.map((t) => t.title),
    });

    setTutorials(allTutorials);
  }, [algorithm]);

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
          We couldn't find a tutorial for "{algorithm}". Please check the
          spelling or browse our available tutorials.
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

  return (
    <AlgorithmTutorial
      algorithm={algorithm as PatternKey}
      tutorials={tutorials}
    />
  );
}

function TutorialList() {
  const tutorials = tutorialsData as TutorialsByCategory;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Available Tutorials</h1>
      {Object.entries(tutorials).map(([category, categoryTutorials]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold mb-4 capitalize">
            {category.replace("-", " ")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryTutorials.map((tutorial) => (
              <Link
                key={tutorial.id}
                to={`/tutorials/${encodeURIComponent(tutorial.title)}`}
                className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium">{tutorial.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {tutorial.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                    {tutorial.difficulty}
                  </span>
                  <span className="text-blue-600">View Tutorial</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function AppContent() {
  const { theme } = useTheme();
  console.log("AppContent rendered with theme:", theme);

  return (
    <div className="min-h-screen w-full bg-main">
      <Navigation />
      <div className="pt-16">
        <TopBar />
        <main className="pt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/progress" element={<ProgressView />} />
            <Route path="/tutorials" element={<TutorialList />} />
            <Route path="/tutorials/:algorithm" element={<TutorialRoute />} />
            <Route path="/python-techniques" element={<PythonTechniques />} />
            <Route
              path="/visualizer"
              element={
                <div
                  className={cn(
                    "container mx-auto p-4 min-h-[calc(100vh-64px)]",
                    theme === "nord" ? "bg-nord-0" : "bg-slate-50"
                  )}
                >
                  <AlgorithmVisualizer
                    algorithm="Bubble Sort"
                    visualizationType="sorting"
                    data={[5, 2, 8, 1, 9, 3, 7, 4, 6]}
                  />
                </div>
              }
            />
            <Route
              path="/algorithm-comparison"
              element={<AlgorithmComparison />}
            />
            <Route path="/algorithm-learning" element={<AlgorithmLearning />} />
            {import.meta.env.DEV && (
              <Route path="/admin/patterns" element={<PatternManagement />} />
            )}
          </Routes>
        </main>
      </div>

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
