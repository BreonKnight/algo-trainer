import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";

import type { Tutorial } from "@/components/tutorials/AlgorithmTutorial";
import { AlgorithmTutorial } from "@/components/tutorials/AlgorithmTutorial";
import type { PatternKey } from "@/components/tutorials/types";
import tutorialsData from "@/data/tutorials.json";
import { cn } from "@/lib/utils";

import { TutorialListItem } from "./TutorialListItem";

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

export function TutorialList() {
  const tutorials = tutorialsData as TutorialsByCategory;

  const sortedCategories = useMemo(() => {
    return Object.entries(tutorials).sort(([a], [b]) => a.localeCompare(b));
  }, [tutorials]);

  return (
    <div className="container mx-auto p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent leading-[1.15] pb-2",
          "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)]"
        )}
      >
        Available Tutorials
      </motion.h1>

      {sortedCategories.map(([category, categoryTutorials]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold mb-4 capitalize">{category.replace("-", " ")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryTutorials.map((tutorial) => (
              <TutorialListItem key={tutorial.id} tutorial={tutorial} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function TutorialRoute() {
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
