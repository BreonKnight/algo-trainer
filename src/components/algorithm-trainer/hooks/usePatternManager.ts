import { useState, useRef, useEffect } from "react";

import { monsterHunterPatternsByCategory } from "@/components/algorithm-trainer/monsterHunterPatternsCombined";
import { PatternKey } from "@/components/algorithm-trainer/types";
import GamificationService from "@/lib/gamification";

// Get all patterns in predefined order
const getOrderedPatterns = () => {
  return Object.values(monsterHunterPatternsByCategory).flat();
};

export function usePatternManager() {
  const orderedPatterns = getOrderedPatterns();
  const [selectedPattern, setSelectedPattern] = useState<PatternKey>(() => {
    const savedPattern = localStorage.getItem("selectedPattern");
    return savedPattern && orderedPatterns.includes(savedPattern as PatternKey)
      ? (savedPattern as PatternKey)
      : (orderedPatterns[0] as PatternKey);
  });
  const patternHistoryRef = useRef<PatternKey[]>([]);
  const currentIndexRef = useRef<number>(-1);

  const handlePatternChange = (pattern: PatternKey) => {
    if (orderedPatterns.includes(pattern)) {
      setSelectedPattern(pattern);
      localStorage.setItem("selectedPattern", pattern);
    }
  };

  const nextPattern = () => {
    const randomIndex = Math.floor(Math.random() * orderedPatterns.length);
    const nextPattern = orderedPatterns[randomIndex] as PatternKey;

    if (selectedPattern !== nextPattern) {
      if (currentIndexRef.current < patternHistoryRef.current.length - 1) {
        patternHistoryRef.current = patternHistoryRef.current.slice(0, currentIndexRef.current + 1);
      }
      patternHistoryRef.current.push(nextPattern);
      currentIndexRef.current = patternHistoryRef.current.length - 1;

      handlePatternChange(nextPattern);
    }
  };

  const previousPattern = () => {
    if (currentIndexRef.current > 0) {
      currentIndexRef.current--;
      const previousPattern = patternHistoryRef.current[currentIndexRef.current] as PatternKey;
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
  };
}
