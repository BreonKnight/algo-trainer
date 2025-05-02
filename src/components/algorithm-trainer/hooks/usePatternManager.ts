import { useState, useRef, useEffect } from "react";
import { PatternKey, PATTERN_KEYS } from "../types";
import GamificationService from "../../../lib/gamification";

export function usePatternManager() {
  const [selectedPattern, setSelectedPattern] = useState<PatternKey>(() => {
    const savedPattern = localStorage.getItem("selectedPattern");
    return savedPattern && PATTERN_KEYS.includes(savedPattern as PatternKey)
      ? (savedPattern as PatternKey)
      : (PATTERN_KEYS[0] as PatternKey);
  });
  const patternHistoryRef = useRef<PatternKey[]>([]);
  const currentIndexRef = useRef<number>(-1);

  const handlePatternChange = (pattern: PatternKey) => {
    if (PATTERN_KEYS.includes(pattern)) {
      setSelectedPattern(pattern);
      localStorage.setItem("selectedPattern", pattern);
    }
  };

  const nextPattern = () => {
    const randomIndex = Math.floor(Math.random() * PATTERN_KEYS.length);
    const nextPattern = PATTERN_KEYS[randomIndex] as PatternKey;

    if (selectedPattern !== nextPattern) {
      if (currentIndexRef.current < patternHistoryRef.current.length - 1) {
        patternHistoryRef.current = patternHistoryRef.current.slice(
          0,
          currentIndexRef.current + 1
        );
      }
      patternHistoryRef.current.push(nextPattern);
      currentIndexRef.current = patternHistoryRef.current.length - 1;

      handlePatternChange(nextPattern);
    }
  };

  const previousPattern = () => {
    if (currentIndexRef.current > 0) {
      currentIndexRef.current--;
      const previousPattern = patternHistoryRef.current[
        currentIndexRef.current
      ] as PatternKey;
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
