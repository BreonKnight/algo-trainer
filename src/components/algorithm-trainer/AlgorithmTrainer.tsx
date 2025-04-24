import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { AudioPlayer, Timer } from "../AudioPlayer";
import { PatternCard } from "./PatternCard";
import { CodeEditor } from "./CodeEditor";
// import { TestCases } from "./TestCases";
import { AnswerCard } from "./AnswerCard";
import { ReplCard } from "./ReplCard";
import { PatternKey, PATTERN_KEYS } from "./types";
import { HelpModal } from "../HelpModal";

// interface TestCase {
//   input: string;
//   output: string;
// }

export default function AlgorithmTrainer() {
  const [currentPattern, setCurrentPattern] = useState<PatternKey>(
    PATTERN_KEYS[0]
  );
  const [showAnswer, setShowAnswer] = useState(false);
  const [userCode, setUserCode] = useState("");
  // const [testCases, setTestCases] = useState<TestCase[]>([]);
  const patternHistoryRef = useRef<PatternKey[]>([]);
  const currentIndexRef = useRef<number>(-1);

  const nextPattern = () => {
    const randomIndex = Math.floor(Math.random() * PATTERN_KEYS.length);
    const nextPattern = PATTERN_KEYS[randomIndex];

    if (currentPattern !== nextPattern) {
      if (currentIndexRef.current < patternHistoryRef.current.length - 1) {
        patternHistoryRef.current = patternHistoryRef.current.slice(
          0,
          currentIndexRef.current + 1
        );
      }

      patternHistoryRef.current.push(nextPattern);
      currentIndexRef.current = patternHistoryRef.current.length - 1;

      setCurrentPattern(nextPattern);
      setShowAnswer(false);
      setUserCode("");
    }
  };

  const previousPattern = () => {
    if (currentIndexRef.current > 0) {
      currentIndexRef.current--;
      const previousPattern =
        patternHistoryRef.current[currentIndexRef.current];
      setCurrentPattern(previousPattern);
      setShowAnswer(false);
      setUserCode("");
    }
  };

  return (
    <div className="container w-full mx-auto p-2 min-h-screen flex flex-col bg-gradient-to-br from-[#282a36] to-[#44475a] relative">
      <h1 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] text-center flex-none">
        Algorithm Trainer
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-2 flex-none gap-2">
        <div className="flex items-center gap-2">
          <Button
            onClick={nextPattern}
            className="bg-[#ff79c6] hover:bg-[#ff79c6]/90 text-[#f8f8f2] text-sm sm:text-base whitespace-nowrap h-8 px-3 rounded-md"
          >
            Next Pattern
          </Button>
          <Button
            onClick={previousPattern}
            className="bg-[#6272a4] hover:bg-[#6272a4]/90 text-[#f8f8f2] text-sm sm:text-base whitespace-nowrap h-8 px-3 rounded-md"
          >
            Previous Pattern
          </Button>
          <HelpModal />
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
          <Timer />
          <AudioPlayer />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-2 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 min-h-0 flex-1">
          <div className="min-h-[300px] md:min-h-0 h-full">
            <PatternCard
              currentPattern={currentPattern}
              onPatternChange={setCurrentPattern}
            />
          </div>
          <div className="min-h-[300px] md:min-h-0 h-full">
            <CodeEditor userCode={userCode} setUserCode={setUserCode} />
          </div>
          <div className="min-h-[300px] md:min-h-0 h-full">
            <AnswerCard
              currentPattern={currentPattern}
              showAnswer={showAnswer}
              setShowAnswer={setShowAnswer}
              onNextPattern={nextPattern}
              onPatternChange={setCurrentPattern}
            />
          </div>
          <div className="min-h-[300px] md:min-h-0 h-full md:col-span-2 xl:col-span-1">
            <ReplCard userCode={userCode} />
          </div>
        </div>
        {/* 
        <div className="h-[250px]">
          <TestCases testCases={testCases} onTestCasesChange={setTestCases} />
        </div> */}
      </div>

      <div className="mt-2 text-center text-sm text-[#6272a4] flex-none">
        Created by{" "}
        <a
          href="https://breon.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#bd93f9] hover:text-[#ff79c6] transition-colors"
        >
          Breon
        </a>
      </div>
    </div>
  );
}
