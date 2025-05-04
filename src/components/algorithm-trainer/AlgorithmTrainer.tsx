import { useState } from "react";
import { TooltipProvider } from "../ui/tooltip";
import { GamificationButton } from "../gamification/GamificationButton";
import { ReplCard } from "./ReplCard";
import { NavigationBar } from "./layout/NavigationBar";
import { TopBar } from "./layout/TopBar";
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
          {/* Title and Pattern Count */}
          <div className="flex flex-col items-center justify-center mt-6 mb-2 relative w-full">
            <h1
              className="text-2xl font-extrabold text-transparent bg-clip-text text-center animate-gradient-x drop-shadow-lg tracking-tight select-none"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--gradient-from), var(--gradient-to))",
              }}
            >
              Algorithm Trainer
            </h1>
            <span className="text-xs font-semibold text-accent2 mt-1">
              Pattern {patternNumber} of {totalPatterns}
            </span>

            <NavigationBar />
          </div>

          <TopBar />

          {/* Main content area */}
          <div className="w-full flex-1">
            <div className="fixed top-4 left-4">
              <GamificationButton />
            </div>
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
