import { useState } from "react";

import { PatternControls } from "@/components/features/algorithm-trainer/components/controls/PatternControls";
import { PanelLayout } from "@/components/features/algorithm-trainer/components/layout/PanelLayout";
import { ReplCard } from '@algo-trainer/shared/components/visualization/ReplCard';
import { usePatternManager } from '@algo-trainer/shared/stores/pattern-store';
import { Background } from "@/components/ui/background";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function AlgorithmTrainer() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [code, setCode] = useState("");

  const {
    selectedPattern,
    handlePatternChange,
    nextPattern,
    previousPattern,
    randomPattern,
    currentPatternIndex,
  } = usePatternManager();

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
