import { useState } from "react";

import { PatternControls } from "@/components/features/algorithm-trainer/components/controls/PatternControls";
import { PanelLayout } from "@/components/features/algorithm-trainer/components/layout/PanelLayout";
import { Background } from "@/components/ui/background";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useUpdateGamificationProgress } from "@/hooks/useUpdateGamificationProgress";

import { ReplCard } from "@algo-trainer/shared/components/visualization/ReplCard";
import { usePatternManager } from "@algo-trainer/shared/stores/pattern-store";

export default function AlgorithmTrainer() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [code, setCode] = useState("");
  const [isFirstAttempt, setIsFirstAttempt] = useState(true);
  const { trackAlgorithmSolution } = useUpdateGamificationProgress();

  const {
    selectedPattern,
    handlePatternChange,
    nextPattern,
    previousPattern,
    randomPattern,
    currentPatternIndex,
  } = usePatternManager();

  const handleSolutionSubmit = async (isCorrect: boolean, isPerfect: boolean) => {
    if (isCorrect) {
      await trackAlgorithmSolution(selectedPattern.id, isFirstAttempt, isPerfect);
      setIsFirstAttempt(false);
    }
  };

  return (
    <Background>
      <div className="flex justify-center w-full">
        <div className="w-full max-w-[100rem] px-6">
          <TooltipProvider>
            {/* Main content area */}
            <div className="w-full flex-1">
              <PanelLayout
                selectedPattern={selectedPattern}
                onPatternChange={handlePatternChange}
                showAnswer={showAnswer}
                setShowAnswer={setShowAnswer}
                onNextPattern={nextPattern}
                patternNumber={currentPatternIndex + 1}
                userCode={code}
                setUserCode={setCode}
                onSolutionSubmit={handleSolutionSubmit}
              />
              <div className="mt-4">
                <ReplCard userCode={code} />
              </div>
              <PatternControls
                onPreviousPattern={previousPattern}
                onNextPattern={nextPattern}
                onRandomPattern={randomPattern}
              />
            </div>
          </TooltipProvider>
        </div>
      </div>
    </Background>
  );
}
