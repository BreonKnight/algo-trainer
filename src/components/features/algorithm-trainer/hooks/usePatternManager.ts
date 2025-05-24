import { useState, useRef, useEffect } from "react";

import { monsterHunterPatternsByCategory } from "@/components/features/algorithm-trainer/data/monster-hunter/monsterHunterPatternsCombined";
import { PatternKey } from "@/components/features/algorithm-trainer/types/types";
import GamificationService from "@/lib/gamification";

// Get all patterns in predefined order
const getOrderedPatterns = () => {
  return Object.values(monsterHunterPatternsByCategory).flat();
};

export function usePatternManager() {
  const orderedPatterns = getOrderedPatterns();
  console.log(
    "orderedPatterns length:",
    orderedPatterns.length,
    "orderedPatterns:",
    orderedPatterns
  );
  const [selectedPattern, setSelectedPattern] = useState<PatternKey>(() => {
    const savedPattern = localStorage.getItem("selectedPattern");
    return savedPattern && orderedPatterns.includes(savedPattern as PatternKey)
      ? (savedPattern as PatternKey)
      : (orderedPatterns[0] as PatternKey);
  });
  const [currentPatternIndex, setCurrentPatternIndex] = useState(() => {
    const savedIndex = localStorage.getItem("currentPatternIndex");
    return savedIndex ? parseInt(savedIndex) : 0;
  });
  const patternHistoryRef = useRef<PatternKey[]>([]);
  const currentIndexRef = useRef<number>(-1);

  const handlePatternChange = (pattern: PatternKey) => {
    if (orderedPatterns.includes(pattern)) {
      setSelectedPattern(pattern);
      const newIndex = orderedPatterns.indexOf(pattern);
      setCurrentPatternIndex(newIndex);
      localStorage.setItem("selectedPattern", pattern);
      localStorage.setItem("currentPatternIndex", newIndex.toString());
      console.log("Pattern changed:", pattern, "Index:", newIndex);
    }
  };

  const nextPattern = () => {
    const currentIndex = orderedPatterns.indexOf(selectedPattern);
    const nextIndex = (currentIndex + 1) % orderedPatterns.length;
    const nextPattern = orderedPatterns[nextIndex] as PatternKey;
    console.log(
      "nextPattern called. currentIndex:",
      currentIndex,
      "nextIndex:",
      nextIndex,
      "nextPattern:",
      nextPattern
    );
    if (selectedPattern !== nextPattern) {
      if (currentIndexRef.current < patternHistoryRef.current.length - 1) {
        patternHistoryRef.current = patternHistoryRef.current.slice(0, currentIndexRef.current + 1);
      }
      patternHistoryRef.current.push(nextPattern);
      currentIndexRef.current = patternHistoryRef.current.length - 1;

      setCurrentPatternIndex(nextIndex);
      localStorage.setItem("currentPatternIndex", nextIndex.toString());
      handlePatternChange(nextPattern);
    }
  };

  const randomPattern = () => {
    const randomIndex = Math.floor(Math.random() * orderedPatterns.length);
    const nextPattern = orderedPatterns[randomIndex] as PatternKey;
    console.log("randomPattern called. randomIndex:", randomIndex, "nextPattern:", nextPattern);
    if (selectedPattern !== nextPattern) {
      if (currentIndexRef.current < patternHistoryRef.current.length - 1) {
        patternHistoryRef.current = patternHistoryRef.current.slice(0, currentIndexRef.current + 1);
      }
      patternHistoryRef.current.push(nextPattern);
      currentIndexRef.current = patternHistoryRef.current.length - 1;

      setCurrentPatternIndex(randomIndex);
      localStorage.setItem("currentPatternIndex", randomIndex.toString());
      handlePatternChange(nextPattern);
    }
  };

  const previousPattern = () => {
    if (currentIndexRef.current > 0) {
      currentIndexRef.current--;
      const previousPattern = patternHistoryRef.current[currentIndexRef.current] as PatternKey;
      const previousIndex = orderedPatterns.indexOf(previousPattern);
      setCurrentPatternIndex(previousIndex);
      localStorage.setItem("currentPatternIndex", previousIndex.toString());
      handlePatternChange(previousPattern);
    }
  };

  // Track algorithm pattern changes
  useEffect(() => {
    if (selectedPattern) {
      const gamificationService = GamificationService.getInstance();
      gamificationService.recordAlgorithmAttempt(selectedPattern, true);
    }
  }, [selectedPattern]);

  return {
    selectedPattern,
    handlePatternChange,
    nextPattern,
    previousPattern,
    randomPattern,
    currentPatternIndex,
  };
}
