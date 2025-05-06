import { useState } from "react";
import { TooltipProvider } from "../ui/tooltip";
import { ReplCard } from "./ReplCard";
import { PanelLayout } from "./layout/PanelLayout";
import { PatternControls } from "./layout/PatternControls";
import { usePatternManager } from "./hooks/usePatternManager";
import { monsterHunterPatternsByCategory } from "./monsterHunterPatternsCombined";

export default function AlgorithmTrainer() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userCode, setUserCode] = useState("");

  const { selectedPattern, handlePatternChange, nextPattern, previousPattern } =
    usePatternManager();

  // Calculate pattern number based on predefined order
  const getPatternNumber = (pattern: string) => {
    let count = 0;
    for (const category of Object.values(monsterHunterPatternsByCategory)) {
      if (category.includes(pattern)) {
        return count + category.indexOf(pattern) + 1;
      }
      count += category.length;
    }
    return 0; // Return 0 if pattern not found in predefined order
  };

  const patternNumber = getPatternNumber(selectedPattern);
  const totalPatterns = Object.values(monsterHunterPatternsByCategory).reduce(
    (sum, category) => sum + category.length,
    0
  );

  return (
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
              patternNumber={patternNumber}
            />
            <div className="mt-4">
              <ReplCard userCode={userCode} />
            </div>
            <PatternControls
              onPreviousPattern={previousPattern}
              onNextPattern={nextPattern}
              onRandomPattern={nextPattern}
              currentPattern={selectedPattern}
              totalPatterns={totalPatterns}
            />
          </div>
        </TooltipProvider>
        <div className="mt-4 text-center text-sm text-secondary flex-none">
          Created by{" "}
          <a
            href="https://breon.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent3 hover:text-accent transition-colors"
          >
            Breon
          </a>
        </div>
      </div>
    </div>
  );
}
