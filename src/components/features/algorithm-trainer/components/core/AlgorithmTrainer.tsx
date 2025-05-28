import { useState } from "react";

import { PatternControls } from "@/components/features/algorithm-trainer/components/controls/PatternControls";
import { PanelLayout } from "@/components/features/algorithm-trainer/components/layout/PanelLayout";
import { Background } from "@/components/ui/background";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useUpdateGamificationProgress } from "@/hooks/useUpdateGamificationProgress";

import { ReplCard } from "@algo-trainer/shared/components/visualization/ReplCard";
import { usePatternManager } from "@algo-trainer/shared/stores/pattern-store";
import { PATTERN_KEYS } from "@algo-trainer/shared/types/algorithm-types";

export default function AlgorithmTrainer() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userCode, setUserCode] = useState("");
  const {
    selectedPattern,
    handlePatternChange,
    nextPattern,
    previousPattern,
    randomPattern,
    currentPatternIndex,
  } = usePatternManager();
  const { trackAlgorithmSolution } = useUpdateGamificationProgress();

  const handleSolutionSubmit = async (
    isCorrect: boolean,
    isFirstAttempt: boolean,
    isPerfectSolution: boolean
  ) => {
    if (isCorrect && selectedPattern) {
      await trackAlgorithmSolution(selectedPattern, isFirstAttempt, isPerfectSolution);
    }
  };

  return (
    <div className="relative min-h-screen">
      <Background>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[100rem] px-6">
            <TooltipProvider>
              <div className="w-full flex-1">
                <PanelLayout
                  selectedPattern={selectedPattern}
                  onPatternChange={handlePatternChange}
                  userCode={userCode}
                  setUserCode={setUserCode}
                  showAnswer={showAnswer}
                  setShowAnswer={setShowAnswer}
                  onNextPattern={nextPattern}
                  patternNumber={currentPatternIndex + 1}
                />
                <div className="mt-4">
                  <ReplCard userCode={userCode} onSolutionSubmit={handleSolutionSubmit} />
                </div>
                <PatternControls
                  onPreviousPattern={previousPattern}
                  onNextPattern={nextPattern}
                  onRandomPattern={randomPattern}
                  currentIndex={currentPatternIndex}
                  totalPatterns={PATTERN_KEYS.length}
                />
              </div>
            </TooltipProvider>
          </div>
        </div>
      </Background>
    </div>
  );
}
