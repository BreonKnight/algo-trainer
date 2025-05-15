import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";

import type { Tutorial } from "@/components/tutorials/AlgorithmTutorial";
import { AlgorithmTutorial } from "@/components/tutorials/AlgorithmTutorial";
import type { PatternKey } from "@/components/tutorials/types";
import { Background } from "@/components/ui/background";
import tutorialsData from "@/data/tutorials.json";
//import { cn } from "@/lib/utils";

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

const getThemeClasses = () => ({
  container: "p-6 max-w-7xl mx-auto",
  heading: "text-4xl sm:text-5xl font-bold mb-6 leading-[1.15] pb-2 text-[var(--card-text)]",
  card:
    "p-6 rounded-2xl shadow-lg border transition-all duration-300 transform hover:-translate-y-1 mb-8 " +
    "bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--card-text)] hover:shadow-xl",
  notFoundCard:
    "p-8 text-center rounded-2xl shadow-lg border max-w-xl mx-auto mt-16 " +
    "bg-[var(--card-bg)] border-[var(--card-border)] text-[var(--card-text)]",
  notFoundHeading: "text-2xl font-bold mb-4 text-[var(--card-text)]",
  notFoundText: "mb-6 text-[var(--text-secondary)]",
  notFoundButton:
    "inline-block px-4 py-2 rounded transition-colors " +
    "bg-[var(--button-bg)] text-[var(--button-text)] hover:bg-[var(--button-hover-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",
});

export function TutorialList() {
  const themeClasses = getThemeClasses();
  const tutorials = tutorialsData as TutorialsByCategory;

  const sortedCategories = useMemo(() => {
    return Object.entries(tutorials).sort(([a], [b]) => a.localeCompare(b));
  }, [tutorials]);

  return (
    <Background>
      <div className={themeClasses.container}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold mb-6 leading-[1.15] pb-2 text-[var(--card-text)] text-center"
        >
          Available Tutorials
        </motion.h1>
        <div className="mx-auto mb-10 w-32 h-2 rounded-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent2)] to-[var(--accent3)] opacity-80 animate-gradient-x"></div>

        {sortedCategories.map(([category, categoryTutorials]) => (
          <div key={category} className={themeClasses.card}>
            <h2 className="text-xl font-semibold mb-4 capitalize text-[var(--card-text)] border-b border-[var(--card-border)] pb-2">
              {category.replace("-", " ")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryTutorials.map((tutorial) => (
                <TutorialListItem key={tutorial.id} tutorial={tutorial} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Background>
  );
}

export function TutorialRoute() {
  const themeClasses = getThemeClasses();
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
      <Background>
        <div className={themeClasses.notFoundCard}>
          <h1 className={themeClasses.notFoundHeading}>Tutorial Not Found</h1>
          <p className={themeClasses.notFoundText}>
            We couldn't find a tutorial for "{algorithm}". Please check the spelling or browse our
            available tutorials.
          </p>
          <a href="/tutorials" className={themeClasses.notFoundButton}>
            Browse Tutorials
          </a>
        </div>
      </Background>
    );
  }

  // Log the props being passed to AlgorithmTutorial
  console.log("\nAlgorithmTutorial props:", {
    algorithm,
    tutorialsCount: tutorials.length,
    tutorialTitles: tutorials.map((t) => t.title),
  });

  return (
    <Background>
      <AlgorithmTutorial algorithm={algorithm as PatternKey} tutorials={tutorials} />
    </Background>
  );
}
