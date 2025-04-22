import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { AudioPlayer, Timer } from "../AudioPlayer";
import { PatternCard } from "./PatternCard";
import { CodeEditor } from "./CodeEditor";
// import { TestCases } from "./TestCases";
import { AnswerCard } from "./AnswerCard";
import { ReplCard } from "./ReplCard";
import { PatternKey, PATTERN_KEYS } from "./types";

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
    <div className="container w-full mx-auto p-4 min-h-screen flex flex-col bg-gradient-to-br from-[#282a36] to-[#44475a]">
      <h1 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ff79c6] to-[#bd93f9] text-center flex-none">
        Algorithm Trainer
      </h1>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 flex-none gap-4 lg:gap-2">
        <div className="flex gap-2">
          <Button
            onClick={nextPattern}
            className="bg-gradient-to-r from-[#bd93f9] to-[#ff79c6] hover:opacity-90"
          >
            Next Pattern
          </Button>
          <Button
            onClick={previousPattern}
            className="bg-gradient-to-r from-[#6272a4] to-[#8be9fd] hover:opacity-90"
          >
            Previous Pattern
          </Button>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <Timer />
          <AudioPlayer />
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 min-h-0">
        <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-4 min-h-0">
          <div className="h-[calc(100vh-20rem)]">
            <PatternCard currentPattern={currentPattern} />
          </div>
          <div className="h-[calc(100vh-20rem)]">
            <CodeEditor userCode={userCode} setUserCode={setUserCode} />
          </div>
          <div className="h-[calc(100vh-20rem)]">
            <AnswerCard
              currentPattern={currentPattern}
              showAnswer={showAnswer}
              setShowAnswer={setShowAnswer}
              onNextPattern={nextPattern}
            />
          </div>
          <div className="h-[calc(100vh-20rem)]">
            <ReplCard userCode={userCode} />
          </div>
        </div>
        {/* 
        <div className="h-[250px]">
          <TestCases testCases={testCases} onTestCasesChange={setTestCases} />
        </div> */}
      </div>

      <div className="mt-4 text-center text-sm text-[#6272a4] flex-none">
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
