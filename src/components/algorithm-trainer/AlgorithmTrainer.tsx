import { useState } from "react";

import { usePatternManager } from "@/components/algorithm-trainer/hooks/usePatternManager";
import { PanelLayout } from "@/components/algorithm-trainer/layout/PanelLayout";
import { PatternControls } from "@/components/algorithm-trainer/layout/PatternControls";
import { monsterHunterPatternsByCategory } from "@/components/algorithm-trainer/monsterHunterPatternsCombined";
import { ReplCard } from "@/components/algorithm-trainer/ReplCard";
import { Background } from "@/components/ui/background";
import { TooltipProvider } from "@/components/ui/tooltip";

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

  const totalPatterns = Object.values(monsterHunterPatternsByCategory).reduce(
    (sum, category) => sum + category.length,
    0
  );

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
                userCode={userCode}
                setUserCode={setUserCode}
                showAnswer={showAnswer}
                setShowAnswer={setShowAnswer}
                onNextPattern={nextPattern}
                patternNumber={currentPatternIndex + 1}
              />
              <div className="mt-4">
                <ReplCard userCode={userCode} setUserCode={setUserCode} />
              </div>
              <PatternControls
                onPreviousPattern={previousPattern}
                onNextPattern={nextPattern}
                onRandomPattern={randomPattern}
                currentPattern={selectedPattern}
                totalPatterns={totalPatterns}
              />
            </div>
          </TooltipProvider>
        </div>
      </div>
    </Background>
  );
}
